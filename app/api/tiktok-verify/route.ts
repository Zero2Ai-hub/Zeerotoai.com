import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse(
    'tiktok-developers-site-verification=Gll3Yhx07amARhGgiLlY0JzandqvbMPD',
    {
      status: 200,
      headers: { 'Content-Type': 'text/plain' },
    }
  );
}
