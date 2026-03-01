import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return new NextResponse('No code received', { status: 400 });
  }

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>TikTok Connected</title>
<style>
  body{background:#0a0a0f;color:#fff;font-family:Segoe UI,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;}
  .box{text-align:center;padding:40px;}
  .check{font-size:64px;margin-bottom:16px;}
  h1{color:#00f0ff;font-size:24px;margin-bottom:8px;}
  p{color:#888;font-size:14px;margin-bottom:24px;}
  .code{background:#111;border:1px solid #222;border-radius:8px;padding:12px 20px;font-family:monospace;font-size:12px;color:#00f0ff;word-break:break-all;max-width:500px;margin:0 auto 24px;}
  a{display:inline-block;background:#00f0ff;color:#000;padding:12px 28px;border-radius:8px;font-weight:700;text-decoration:none;}
</style>
</head>
<body>
<div class="box">
  <div class="check">✅</div>
  <h1>TikTok Authorization Successful</h1>
  <p>Login Kit OAuth flow complete. Authorization code received from TikTok.</p>
  <div class="code">code=${code.substring(0, 40)}...</div>
  <p style="color:#555;font-size:12px;margin-bottom:20px;">Code will be exchanged for access_token server-side</p>
  <a href="/en/tiktok-demo">← Back to Demo</a>
</div>
</body>
</html>`;

  return new NextResponse(html, { headers: { 'Content-Type': 'text/html' } });
}
