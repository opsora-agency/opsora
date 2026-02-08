import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Updated: Pulling from environment variables for security
    const scriptUrl = process.env.NEXT_PUBLIC_SCRIPT_URL_SUPPORT;

    if (!scriptUrl) {
      return NextResponse.json(
        { success: false, error: 'Support Script URL is not configured' },
        { status: 500 }
      );
    }
    
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    const result = await response.json();
    
    return NextResponse.json({ success: result.success });
    
  } catch (error: any) {
    console.error('Support Store Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}