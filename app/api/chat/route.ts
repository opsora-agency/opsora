import { NextRequest, NextResponse } from 'next/server';

// SYSTEM PROMPT with ALL Opsora website knowledge
const SYSTEM_PROMPT = `You are Opsora AI Assistant - a smart chatbot for Opsora Agency.

OPSTORA AGENCY - COMPLETE KNOWLEDGE BASE:

🏢 COMPANY INFO:
- Name: Opsora Agency
- Tagline: "Digital Solutions for Sustainable Growth"
- Email: opsoraagency@gmail.com
- Service Email (For Active Use): opsora.services@gmail.com
- Phone: +91 8401765505
- WhatsApp: https://wa.me/918401765505
- Website: opsoraagency.in
- 24/7 Support Available

Owner Details:
Founder & CEO: Mauliksinh Makwana

🎯 SERVICES WE PROVIDE:

1. AI CHATBOT DEVELOPMENT 🤖
   - Natural Language Processing (NLP)
   - Multi-platform deployment (Website, WhatsApp, Telegram)
   - Human handoff systems
   - Analytics dashboard
   - 24/7 customer support automation
   - Starting: Custom pricing, free demo available

2. WORKFLOW AUTOMATION ⚡
   - Business process automation
   - AI-powered workflow design
   - Integration with existing tools
   - Performance monitoring
   - Custom automation scripts
   - Starting: Custom pricing, free demo available

3. SALES AI AGENTS 📈
   - Lead qualification & scoring
   - Automated outreach sequences
   - Meeting scheduling automation
   - CRM data synchronization
   - Sales pipeline automation
   - Starting: Custom pricing, free demo available

4. SUPPORT AI AGENTS 🛠️
   - Ticketing system integration
   - Self-service troubleshooting
   - Knowledge base management
   - Sentiment analysis
   - 24/7 instant support
   - Starting: Custom pricing, free demo available

5. CUSTOM AI SOLUTIONS 🎨
   - Requirement analysis
   - Custom model training
   - Industry-specific solutions
   - API development & integration
   - Tailored AI solutions
   - Starting: Custom pricing, free demo available

💰 PRICING MODELS:
1. Basic Plan: Custom pricing - Basic chatbot, Email support, Monthly reports
2. Professional Plan: Custom pricing - Advanced AI, Multi-platform, Priority support, Analytics
3. Enterprise Plan: Custom pricing - Custom development, Dedicated support, API access, Training
   *All plans include: No setup fees, Free demo trial, 24/7 support*

🚀 KEY FEATURES:
- No setup fees
- Free demo trial
- 24/7 support
- Multi-platform deployment
- Custom solutions
- Continuous learning AI

📞 CONTACT OPTIONS:
1. Email: opsoraagency@gmail.com
2. Phone: +91 8401765505
3. WhatsApp: https://wa.me/918401765505
4. Book Demo: /book-service page

🔧 TOOLS & TECHNOLOGIES WE USE:
- OpenAI GPT-4, Claude AI, Gemini
- Groq LLaMA 3.1, LlamaIndex
- n8n, Zapier, Make.com, LangChain
- HubSpot, Pipedrive, Zoho, Salesforce
- Slack, WhatsApp Business, Telegram API

📊 RESULTS WE DELIVER:
- 80% query resolution without human help
- 24/7 availability
- 4.8/5 customer satisfaction
- 70% cost reduction vs traditional support

📝 HOW TO RESPOND:
1. Be professional, helpful, and enthusiastic
2. Use bullet points for lists, emojis for readability
3. Always provide accurate contact info when asked
4. Encourage booking demos for exact pricing
5. If unsure, direct to email/phone contact
6. Keep responses concise but informative

IMPORTANT:Give answer short
IMPORTANT: You can book demos, schedule meetings, and provide quotes through chat.
MOST IMPORTANT: IF USER TALK/ASK ANY OTHER THING, ANY OTHER THING THAT NOT RELATED TO OPSORA AGENCY, THEN DECLINE THAT.`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages, action, bookingData } = body;

    // ========== HANDLE BOOKING CREATION ==========
    if (action === 'create_booking') {
      return handleBooking(bookingData);
    }

    // ========== HANDLE REGULAR CHAT ==========
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    // Add system prompt to messages
    const enhancedMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages
    ];

    // Try Groq first (primary), fallback to OpenRouter (backup)
    let response = await tryProvider('groq', enhancedMessages);
    
    if (!response.success) {
      console.log('Groq failed, trying OpenRouter...');
      response = await tryProvider('openrouter', enhancedMessages);
    }

    if (!response.success) {
      // Fallback response if all AI providers fail
      return NextResponse.json({
        success: true,
        content: `I apologize, I'm having trouble connecting to my AI services right now. 😔\n\n📞 **Please contact us directly:**\n• **Email:** opsoraagency@gmail.com\n• **Phone:** +91 8401765505\n• **WhatsApp:** https://wa.me/918401765505\n\nWe'll get back to you within 24 hours! 🚀`,
        provider: 'fallback'
      });
    }

    return NextResponse.json({
      success: true,
      content: response.content,
      provider: response.provider
    });
    
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { 
        success: true,
        content: `I encountered an error. Please contact us directly:\n📧 **Email:** opsoraagency@gmail.com\n📞 **Phone:** +91 8401765505\n\nWe're here to help! 🚀`
      }
    );
  }
}

// ========== BOOKING HANDLER ==========
async function handleBooking(bookingData: any) {
  try {
    if (!bookingData) {
      return NextResponse.json(
        { error: 'Booking data is required' },
        { status: 400 }
      );
    }

    console.log('📥 New Booking Received:', bookingData);

    // Generate booking ID
    const bookingId = `OPS-${Date.now()}`;

    // Send booking emails
    const emailSent = await sendBookingEmails(bookingData, bookingId);

    if (emailSent) {
      return NextResponse.json({
        success: true,
        message: 'Booking confirmed successfully!',
        bookingId: bookingId,
        nextSteps: [
          'Confirmation email sent to you',
          'Our team will contact within 24 hours',
          'Check spam folder if no email received'
        ],
        timestamp: new Date().toISOString()
      });
    } else {
      // If email fails, still return success but with different message
      return NextResponse.json({
        success: true,
        message: 'Booking recorded successfully!',
        bookingId: bookingId,
        note: 'Our team will contact you soon',
        contactInfo: 'Email: opsoraagency@gmail.com | Phone: +91 8401765505',
        timestamp: new Date().toISOString()
      });
    }

  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json({
      success: true,
      message: 'Booking recorded!',
      note: 'Please email us directly to confirm: opsoraagency@gmail.com',
      timestamp: new Date().toISOString()
    });
  }
}

// ========== SEND BOOKING EMAILS ==========
async function sendBookingEmails(bookingData: any, bookingId: string) {
  try {
    const serviceNames: {[key: string]: string} = {
      'ai_chatbot': 'AI Chatbot Development',
      'workflow_automation': 'Workflow Automation', 
      'sales_ai': 'Sales AI Agent',
      'support_ai': 'Support AI Agent',
      'custom_ai': 'Custom AI Solution'
    };

    const serviceName = serviceNames[bookingData.service] || bookingData.service;

    // 1. Send to Opsora team
    const opsoraEmail = await sendEmail({
      to: 'opsoraagency@gmail.com',
      subject: `🎯 New Booking: ${serviceName} - ${bookingData.name}`,
      html: createOpsoraEmailHTML(bookingData, bookingId, serviceName)
    });

    // 2. Send confirmation to client
    const clientEmail = await sendEmail({
      to: bookingData.email,
      subject: `✅ Your Opsora Demo is Confirmed!`,
      html: createClientEmailHTML(bookingData, bookingId, serviceName)
    });

    return opsoraEmail && clientEmail;

  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
}

// ========== EMAIL SENDING FUNCTION ==========
async function sendEmail(emailData: {to: string, subject: string, html: string}) {
  try {
    // Use your existing email API endpoint
    const response = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/send-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: emailData.to,
        subject: emailData.subject,
        html: emailData.html,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Email API error:', error);
    return false;
  }
}

// ========== EMAIL TEMPLATES ==========
function createOpsoraEmailHTML(bookingData: any, bookingId: string, serviceName: string) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; }
        .header { background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { padding: 30px; background: #f8fafc; }
        .booking-details { background: white; padding: 25px; border-radius: 10px; margin: 20px 0; border: 2px solid #e2e8f0; }
        .detail-row { margin: 15px 0; padding-bottom: 15px; border-bottom: 1px solid #e2e8f0; }
        .detail-label { font-weight: bold; color: #1e40af; }
        .detail-value { color: #334155; margin-top: 5px; }
        .action-box { background: #dbeafe; padding: 20px; border-radius: 10px; margin: 25px 0; }
        .footer { text-align: center; padding: 20px; color: #64748b; font-size: 14px; border-top: 1px solid #e2e8f0; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🎯 New Booking Received!</h1>
        <p>Booking ID: ${bookingId}</p>
      </div>
      
      <div class="content">
        <h2>Client Details</h2>
        <div class="booking-details">
          <div class="detail-row">
            <div class="detail-label">Service Booked</div>
            <div class="detail-value">${serviceName}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Client Name</div>
            <div class="detail-value">${bookingData.name}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Email Address</div>
            <div class="detail-value">${bookingData.email}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Company</div>
            <div class="detail-value">${bookingData.company || 'Not provided'}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Phone</div>
            <div class="detail-value">${bookingData.phone || 'Not provided'}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Requirements</div>
            <div class="detail-value">${bookingData.requirements}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Preferred Time</div>
            <div class="detail-value">${bookingData.preferredDate}</div>
          </div>
        </div>

        <div class="action-box">
          <h3>🚀 Immediate Actions Required:</h3>
          <ol>
            <li>Contact client within <strong>24 hours</strong></li>
            <li>Schedule demo at their preferred time</li>
            <li>Send calendar invite with Google Meet link</li>
            <li>Follow up via WhatsApp: ${bookingData.phone ? bookingData.phone : 'Use email'}</li>
          </ol>
        </div>

        <p><strong>Quick Links:</strong></p>
        <p>
          📧 <a href="mailto:${bookingData.email}">Email Client</a> | 
          📱 <a href="https://wa.me/91${bookingData.phone?.replace(/\\D/g, '') || '8401765505'}">WhatsApp Client</a> |
          📅 <a href="https://calendar.google.com/calendar/u/0/r/eventedit">Create Calendar Event</a>
        </p>
      </div>

      <div class="footer">
        <p><em>📅 Booked via AI Chatbot • ${new Date().toLocaleString()}</em></p>
        <p>Opsora Agency • Digital Solutions for Sustainable Growth</p>
      </div>
    </body>
    </html>
  `;
}

function createClientEmailHTML(bookingData: any, bookingId: string, serviceName: string) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; }
        .header { background: linear-gradient(135deg, #10b981 0%, #34d399 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { padding: 30px; background: #f0fdf4; }
        .confirmation { background: white; padding: 25px; border-radius: 10px; margin: 20px 0; border: 2px solid #bbf7d0; }
        .detail-row { margin: 12px 0; }
        .detail-label { font-weight: bold; color: #059669; }
        .next-steps { background: #dcfce7; padding: 20px; border-radius: 10px; margin: 25px 0; }
        .contact-info { background: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0; }
        .footer { text-align: center; padding: 20px; color: #64748b; font-size: 14px; border-top: 1px solid #e2e8f0; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>✅ Your Demo is Confirmed!</h1>
        <p>Booking Reference: ${bookingId}</p>
      </div>
      
      <div class="content">
        <div class="confirmation">
          <h2>Thank you for booking with Opsora!</h2>
          <p>We're excited to show you how we can help your business grow with AI solutions.</p>
          
          <div class="detail-row">
            <div class="detail-label">Service:</div>
            <div>${serviceName}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Name:</div>
            <div>${bookingData.name}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Email:</div>
            <div>${bookingData.email}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Preferred Time:</div>
            <div>${bookingData.preferredDate}</div>
          </div>
        </div>

        <div class="next-steps">
          <h3>📋 What Happens Next:</h3>
          <ol>
            <li><strong>Within 24 hours:</strong> Our team will contact you to finalize the demo time</li>
            <li><strong>Before the demo:</strong> We'll send you a calendar invite with Google Meet link</li>
            <li><strong>During the demo:</strong> We'll show you exactly how our solution works for your needs</li>
            <li><strong>After the demo:</strong> You'll receive a customized proposal</li>
          </ol>
        </div>

        <div class="contact-info">
          <h4>📞 Need immediate assistance?</h4>
          <p>• Email: opsoraagency@gmail.com</p>
          <p>• Phone: +91 8401765505</p>
          <p>• WhatsApp: https://wa.me/918401765505</p>
        </div>
      </div>

      <div class="footer">
        <p><em>We look forward to helping your business grow! 🚀</em></p>
        <p>Opsora Agency • Digital Solutions for Sustainable Growth</p>
      </div>
    </body>
    </html>
  `;
}

// ========== AI PROVIDER FUNCTIONS ==========
async function tryProvider(provider: 'groq' | 'openrouter', messages: any[]) {
  const providers = {
    groq: {
      url: 'https://api.groq.com/openai/v1/chat/completions',
      key: process.env.GROQ_API_KEY || process.env.NEXT_PUBLIC_GROQ_API_KEY,
      model: 'llama-3.1-8b-instant' // Updated to 8b model
    },
    openrouter: {
      url: 'https://openrouter.ai/api/v1/chat/completions',
      key: process.env.OPENROUTER_API_KEY || process.env.NEXT_PUBLIC_OPENROUTER_API_KEY,
      model: 'meta-llama/llama-3.1-8b-instruct:free' // Updated to 8b model
    }
  };

  const config = providers[provider];
  
  if (!config.key) {
    console.log(`${provider} API key not found`);
    return { success: false, provider };
  }

  try {
    const response = await fetch(config.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.key}`,
        ...(provider === 'openrouter' && {
          'HTTP-Referer': process.env.NEXTAUTH_URL || 'https://opsora.agency',
          'X-Title': 'Opsora Agency'
        })
      },
      body: JSON.stringify({
        model: config.model,
        messages: messages,
        temperature: 0.7,
        max_tokens: 1500,
        stream: false
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`${provider} API error:`, response.status, errorText);
      return { success: false, provider };
    }

    const data = await response.json();
    
    if (!data.choices?.[0]?.message?.content) {
      console.error(`${provider} returned empty content:`, data);
      return { success: false, provider };
    }
    
    return {
      success: true,
      content: data.choices[0].message.content,
      provider: provider
    };
  } catch (error) {
    console.error(`${provider} request error:`, error);
    return { success: false, provider };
  }
}