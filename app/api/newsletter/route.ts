// app/api/newsletter/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();
    
    // 1. Validation
    if (!email || !email.includes('@')) {
      return NextResponse.json({ success: false, error: 'Valid email required' }, { status: 400 });
    }

    // 2. Environment Variable - Use the exact key from your .env.local
    const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    if (!GOOGLE_SCRIPT_URL) {
      console.error('❌ Config Error: NEXT_PUBLIC_GOOGLE_SCRIPT_URL is missing');
      return NextResponse.json({ success: false, error: 'Server configuration error' }, { status: 500 });
    }

    // 3. Forward to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email: email.trim(), 
        name: (name || '').trim() 
      }),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({ 
        success: true, 
        message: "🎉 Success! You're subscribed." 
      });
    } else {
      throw new Error(result.error || "Google Script rejected the request");
    }

  } catch (error) {
    console.error('Newsletter API Error:', error);
    return NextResponse.json({ success: false, error: "Failed to subscribe" }, { status: 500 });
  }
}