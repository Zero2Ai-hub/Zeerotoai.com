import { NextRequest, NextResponse } from "next/server";

const TRADING_TOKEN = process.env.TRADING_TOKEN || "jarvis-trading-2026";
const GH_TOKEN = process.env.GITHUB_TOKEN;
const GH_REPO = "Zero2Ai-hub/Jarvis-Ops";
const GH_PATH = "trading/portfolio.json";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  if (!token || token !== TRADING_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Fetch from GitHub API (works from Vercel, private repo with token)
    const url = `https://api.github.com/repos/${GH_REPO}/contents/${GH_PATH}`;
    const r = await fetch(url, {
      headers: {
        Authorization: `token ${GH_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 0 }, // no cache
    });

    if (!r.ok) {
      return NextResponse.json({ error: "Portfolio data not found", status: r.status }, { status: 404 });
    }

    const ghData = await r.json();
    // GitHub returns base64-encoded content
    const content = Buffer.from(ghData.content, "base64").toString("utf8");
    const portfolio = JSON.parse(content);

    return NextResponse.json(portfolio, {
      headers: {
        "Cache-Control": "no-store",
        "X-Last-Updated": portfolio.last_updated || "",
      },
    });
  } catch (e) {
    return NextResponse.json({ error: "Failed to load portfolio", detail: String(e) }, { status: 500 });
  }
}
