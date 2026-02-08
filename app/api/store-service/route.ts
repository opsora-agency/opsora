import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // 1. Get the full data object from the frontend
    const formData = await request.json();
    
    // 2. Updated: Pulling from environment variables for security
    const scriptUrl = process.env.NEXT_PUBLIC_SCRIPT_URL_SERVICE;

    if (!scriptUrl) {
      return NextResponse.json(
        { success: false, error: 'Service Script URL is not configured' },
        { status: 500 }
      );
    }
    
    // 3. Forward the complete payload to Google Sheets
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    const result = await response.json();
    
    if (result.success) {
      return NextResponse.json({ 
        success: true, 
        stored: true,
        message: 'All form data and consents saved successfully' 
      });
    } else {
      return NextResponse.json(
        { success: false, error: result.error || 'Google Script failed' },
        { status: 500 }
      );
    }
    
  } catch (error: any) {
    console.error('Store Service Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// Handle CORS pre-flight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}