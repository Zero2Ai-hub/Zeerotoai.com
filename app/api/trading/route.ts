import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

// Token-protected trading dashboard API
// Usage: GET /api/trading?token=YOUR_SECRET_TOKEN

const TRADING_TOKEN = process.env.TRADING_TOKEN || "jarvis-trading-2026";
const PORTFOLIO_PATH = join(process.env.HOME || "/home/aladdin", ".openclaw/workspace/trading/paper-dashboard/portfolio.json");

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");
  
  if (!token || token !== TRADING_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const raw = readFileSync(PORTFOLIO_PATH, "utf8");
    const data = JSON.parse(raw);
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "no-store",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch {
    return NextResponse.json({ 
      error: "Portfolio data not found",
      hint: "Monitor may not have run yet"
    }, { status: 404 });
  }
}
