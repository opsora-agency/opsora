import { ChatRequest, ChatResponse } from './types';

class ChatService {
  private apiKeys = {
    groq: process.env.GROQ_API_KEY,
    openrouter: process.env.OPENROUTER_API_KEY,
  };

  async sendMessage(messages: ChatRequest['messages']): Promise<ChatResponse> {
    try {
      // Try Groq first (LLaMA-3)
      if (this.apiKeys.groq) {
        return await this.callGroqAPI(messages);
      }
      
      // Fallback to OpenRouter
      if (this.apiKeys.openrouter) {
        return await this.callOpenRouterAPI(messages);
      }
      
      throw new Error('No API keys configured');
      
    } catch (error) {
      console.error('Chat API error:', error);
      return {
        message: 'I apologize, but I\'m having trouble connecting right now. Please try again in a moment.',
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  private async callGroqAPI(messages: ChatRequest['messages']): Promise<ChatResponse> {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKeys.groq}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        messages: [
          {
            role: 'system',
            content: `You are the official Opsora Agency AI assistant. Opsora Agency provides:
1. Digital Marketing Services (SEO, Social Media, PPC, Content Marketing, Email Marketing)
2. AI & Automation Services (Workflow Automation, Chatbots, AI Agents)
3. Website Development Services

Company details:
- Email: opsoraagency@gmail.com
- WhatsApp: +91 8401765505
- Services URL: /services
- Contact URL: /contact

You should:
1. Be professional, helpful, and friendly
2. Focus on Opsora's services
3. Suggest booking demos or consultations when appropriate
4. Keep responses concise and informative
5. Never share internal company information
6. If unsure, suggest contacting the team directly`
          },
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 1000,
        stream: false,
      }),
    });

    if (!response.ok) {
      throw new Error(`Groq API error: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      message: data.choices[0].message.content,
      model: data.model,
    };
  }

  private async callOpenRouterAPI(messages: ChatRequest['messages']): Promise<ChatResponse> {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKeys.openrouter}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://opsora.com',
        'X-Title': 'Opsora Agency',
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-3-70b-instruct',
        messages: [
          {
            role: 'system',
            content: `You are the official Opsora Agency AI assistant. Provide helpful information about services.`
          },
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenRouter API error: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      message: data.choices[0].message.content,
      model: data.model,
    };
  }
}

export const chatService = new ChatService();