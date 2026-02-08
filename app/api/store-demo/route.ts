import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Updated: Pulling from environment variables for security
    const scriptUrl = process.env.NEXT_PUBLIC_SCRIPT_URL_DEMO;

    if (!scriptUrl) {
      return NextResponse.json(
        { success: false, error: 'Demo Script URL is not configured' },
        { status: 500 }
      );
    }
    
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    const result = await response.json();
    
    if (result.success) {
      return NextResponse.json({ success: true, stored: true });
    } else {
      return NextResponse.json({ success: false, error: result.error }, { status: 500 });
    }
  } catch (error: any) {
    console.error('Demo Store Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}