import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (BOT_TOKEN && CHAT_ID) {
      const message = `🚨 New Investor Contact

Name: ${body.name ?? ''}
Email: ${body.email ?? ''}
Phone: ${body.phone ?? ''}
Broker: ${body.broker ?? ''}
Message: ${body.message ?? ''}`;

      try {
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message
          })
        });
      } catch (telegramError) {
        console.error('Failed to send Telegram notification', telegramError);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

