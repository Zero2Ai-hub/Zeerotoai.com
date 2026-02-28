import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  if (error) {
    return new NextResponse(`TikTok OAuth error: ${error}`, { status: 400 });
  }

  if (!code) {
    return new NextResponse('No code received', { status: 400 });
  }

  const clientKey = process.env.TIKTOK_CLIENT_KEY;
  const clientSecret = process.env.TIKTOK_CLIENT_SECRET;

  if (!clientKey || !clientSecret) {
    return new NextResponse('TikTok credentials not configured', { status: 500 });
  }

  const tokenRes = await fetch('https://open.tiktokapis.com/v2/oauth/token/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_key: clientKey,
      client_secret: clientSecret,
      code,
      grant_type: 'authorization_code',
      redirect_uri: 'https://zeerotoai.com/en/api/tiktok/callback',
    }),
  });

  const tokenData = await tokenRes.json();
  return NextResponse.json({ success: true, ...tokenData });
}
