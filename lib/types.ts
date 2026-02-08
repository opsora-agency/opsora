export interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface ChatRequest {
  messages: Array<{
    role: 'user' | 'assistant';
    content: string;
  }>;
}

export interface ChatResponse {
  message: string;
  model?: string;
  error?: string;
}

export interface ChatbotConfig {
  enabled: boolean;
  defaultGreeting: string;
  model: 'llama3-8b' | 'llama3-70b' | 'gpt-4' | 'claude-3';
  temperature: number;
  maxTokens: number;
}