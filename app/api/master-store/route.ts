import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formType, ...formData } = body;

    // 1. Determine Spreadsheet ID based on formType
    let targetSheetId = '';
    switch (formType) {
      case 'service': targetSheetId = process.env.ID_SERVICE!; break;
      case 'demo': targetSheetId = process.env.ID_DEMO!; break;
      case 'contact': targetSheetId = process.env.ID_CONTACT!; break;
      case 'support': targetSheetId = process.env.ID_SUPPORT!; break;
      default: return NextResponse.json({ success: false, error: 'Invalid type' }, { status: 400 });
    }

    // 2. Run Sheet Storage and Email parallelly
    const [sheetResponse, emailResponse] = await Promise.allSettled([
      // Store to Google Sheet
      fetch(process.env.NEXT_PUBLIC_MASTER_SCRIPT_URL!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, targetSheetId }),
      }),
      // Send Email
      fetch(`${request.nextUrl.origin}/api/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'opsoraagency@gmail.com',
          subject: `New ${formType.toUpperCase()} Submission: ${formData.customerName || formData.name}`,
          // You can pass the whole formData to your email template
          data: formData 
        }),
      })
    ]);

    return NextResponse.json({ 
      success: true, 
      sheetStatus: sheetResponse.status, 
      emailStatus: emailResponse.status 
    });

  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}