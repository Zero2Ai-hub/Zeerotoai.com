"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";

interface Position {
  symbol: string;
  entry_price: number;
  sl_price: number;
  tp_price: number;
  size_usdc: number;
  entry_time: string;
  btc_bull_at_entry: boolean;
  tp1_hit: boolean;
  current_price?: number;
}

interface Trade {
  symbol: string;
  entry_price: number;
  exit_price: number;
  entry_time: string;
  exit_time: string;
  held_hours: number;
  pnl_pct: number;
  pnl_usd: number;
  exit_type: string;
  size_usdc: number;
  btc_bull: boolean;
}

interface Portfolio {
  starting_capital_usdc: number;
  current_capital_usdc: number;
  deployed_usdc: number;
  open_positions: Position[];
  closed_trades: Trade[];
  stats: { total_trades: number; wins: number; losses: number; total_pnl_usdc: number };
}

interface DashboardData {
  last_updated: string;
  btc_regime: string;
  paper_portfolio: Portfolio;
}

function fmt(n: number, dec = 2) {
  return (n >= 0 ? "+" : "") + n.toFixed(dec);
}
function fmtUSD(n: number) {
  return (n >= 0 ? "+$" : "-$") + Math.abs(n).toFixed(2);
}

const COLORS = {
  bg: "#0a0a0f",
  card: "#13131f",
  border: "#1e1e2e",
  green: "#00d4aa",
  red: "#ff4757",
  yellow: "#ffa502",
  gray: "#888",
  text: "#e0e0e0",
};

export default function TradingDashboard() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [data, setData] = useState<DashboardData | null>(null);
  const [error, setError] = useState("");
  const [lastRefresh, setLastRefresh] = useState("");

  const load = useCallback(async () => {
    if (!token) { setError("Missing token. Use ?token=YOUR_TOKEN"); return; }
    try {
      const r = await fetch(`/api/trading?token=${token}&t=${Date.now()}`);
      if (r.status === 401) { setError("Invalid token."); return; }
      if (!r.ok) { setError("Portfolio data not ready yet."); return; }
      const d = await r.json();
      setData(d);
      setLastRefresh(new Date().toLocaleTimeString("en-AE", { timeZone: "Asia/Dubai", hour12: false }));
    } catch { setError("Network error."); }
  }, [token]);

  useEffect(() => { load(); const t = setInterval(load, 60000); return () => clearInterval(t); }, [load]);

  if (error) return (
    <div style={{ background: COLORS.bg, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.red, fontFamily: "Monaco, monospace" }}>
      ⚠️ {error}
    </div>
  );

  if (!data) return (
    <div style={{ background: COLORS.bg, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.gray, fontFamily: "Monaco, monospace" }}>
      Loading...
    </div>
  );

  const p = data.paper_portfolio;
  const pnl = p.current_capital_usdc - p.starting_capital_usdc;
  const pnlPct = (pnl / p.starting_capital_usdc) * 100;
  const wins = p.closed_trades.filter(t => t.pnl_pct > 0);
  const losses = p.closed_trades.filter(t => t.pnl_pct <= 0);
  const wr = p.closed_trades.length ? (wins.length / p.closed_trades.length * 100).toFixed(1) : "—";
  const aw = wins.length ? (wins.reduce((s, t) => s + t.pnl_pct, 0) / wins.length).toFixed(2) : "—";
  const al = losses.length ? (losses.reduce((s, t) => s + t.pnl_pct, 0) / losses.length).toFixed(2) : "—";
  const btcBull = data.btc_regime === "bullish";
  const recent = [...p.closed_trades].sort((a, b) => new Date(b.exit_time).getTime() - new Date(a.exit_time).getTime()).slice(0, 15);

  const s: Record<string, React.CSSProperties> = {
    page: { background: COLORS.bg, minHeight: "100vh", color: COLORS.text, fontFamily: "Monaco, monospace", padding: "16px", maxWidth: "900px", margin: "0 auto" },
    h1: { color: COLORS.green, fontSize: "18px", marginBottom: "2px" },
    sub: { color: COLORS.gray, fontSize: "11px", marginBottom: "20px" },
    grid4: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px", marginBottom: "16px" },
    grid2: { display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "12px", marginBottom: "16px" },
    card: { background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: "8px", padding: "14px" },
    label: { fontSize: "10px", color: COLORS.gray, textTransform: "uppercase" as const, letterSpacing: "1px", marginBottom: "4px" },
    val: { fontSize: "20px", fontWeight: "bold" },
    sub2: { fontSize: "11px", color: COLORS.gray, marginTop: "2px" },
    secTitle: { fontSize: "12px", color: COLORS.gray, textTransform: "uppercase" as const, letterSpacing: "1px", marginBottom: "8px", borderBottom: `1px solid ${COLORS.border}`, paddingBottom: "6px" },
    table: { width: "100%", borderCollapse: "collapse" as const, fontSize: "11px" },
    th: { padding: "6px 8px", color: COLORS.gray, textAlign: "left" as const, borderBottom: `1px solid ${COLORS.border}` },
    td: { padding: "6px 8px", borderBottom: `1px solid #0d0d1a` },
    pos: { display: "flex", justifyContent: "space-between", padding: "8px", borderBottom: `1px solid #0d0d1a`, fontSize: "12px" },
    noData: { color: "#444", fontSize: "12px", padding: "16px", textAlign: "center" as const },
  };

  return (
    <div style={s.page}>
      <h1 style={s.h1}>⚡ Jarvis Trading Dashboard</h1>
      <p style={s.sub}>SMC v3.1 | Paper Trading | Last update: {lastRefresh} UAE | Auto-refresh 60s</p>

      {/* Row 1: Main metrics */}
      <div style={s.grid4}>
        <div style={s.card}>
          <div style={s.label}>Portfolio</div>
          <div style={{ ...s.val, color: COLORS.green }}>${p.current_capital_usdc.toFixed(2)}</div>
          <div style={{ ...s.sub2, color: pnl >= 0 ? COLORS.green : COLORS.red }}>{fmtUSD(pnl)} ({fmt(pnlPct, 1)}%)</div>
        </div>
        <div style={s.card}>
          <div style={s.label}>Open Positions</div>
          <div style={s.val}>{p.open_positions.length} / 5</div>
          <div style={s.sub2}>${p.deployed_usdc.toFixed(0)} deployed</div>
        </div>
        <div style={s.card}>
          <div style={s.label}>Win Rate</div>
          <div style={{ ...s.val, color: parseFloat(wr) >= 55 ? COLORS.green : parseFloat(wr) >= 50 ? COLORS.yellow : COLORS.red }}>{wr}{wr !== "—" ? "%" : ""}</div>
          <div style={s.sub2}>{p.closed_trades.length} closed trades</div>
        </div>
        <div style={s.card}>
          <div style={s.label}>BTC Regime</div>
          <div style={{ ...s.val, color: btcBull ? COLORS.green : COLORS.red }}>{btcBull ? "🟢 BULL" : "🔴 BEAR"}</div>
          <div style={s.sub2}>Size: {btcBull ? "10%" : "5%"} / trade</div>
        </div>
      </div>

      {/* Row 2: Secondary metrics */}
      <div style={s.grid4}>
        <div style={s.card}>
          <div style={s.label}>Avg Win</div>
          <div style={{ ...s.val, fontSize: "16px", color: COLORS.green }}>{aw !== "—" ? "+" + aw + "%" : "—"}</div>
        </div>
        <div style={s.card}>
          <div style={s.label}>Avg Loss</div>
          <div style={{ ...s.val, fontSize: "16px", color: COLORS.red }}>{al !== "—" ? al + "%" : "—"}</div>
        </div>
        <div style={s.card}>
          <div style={s.label}>Total Wins</div>
          <div style={{ ...s.val, fontSize: "16px", color: COLORS.green }}>{wins.length}</div>
        </div>
        <div style={s.card}>
          <div style={s.label}>Total Losses</div>
          <div style={{ ...s.val, fontSize: "16px", color: COLORS.red }}>{losses.length}</div>
        </div>
      </div>

      {/* Open Positions */}
      <div style={{ marginBottom: "16px" }}>
        <div style={s.secTitle}>Open Positions</div>
        {p.open_positions.length === 0 ? (
          <div style={s.noData}>No open positions</div>
        ) : (
          <div style={s.card}>
            {p.open_positions.map((pos, i) => {
              const pctFromEntry = pos.current_price ? ((pos.current_price - pos.entry_price) / pos.entry_price * 100) : 0;
              const ageH = ((Date.now() - new Date(pos.entry_time).getTime()) / 3600000).toFixed(1);
              return (
                <div key={i} style={s.pos}>
                  <span style={{ color: "#fff", fontWeight: "bold", width: "100px" }}>{pos.symbol.replace("USDT","")}</span>
                  <span style={{ color: COLORS.gray, flex: 1, fontSize: "11px" }}>
                    ${pos.entry_price.toFixed(4)} | {ageH}h | SL ${pos.sl_price.toFixed(4)} | TP ${pos.tp_price.toFixed(4)} | ${pos.size_usdc.toFixed(0)}
                    {pos.tp1_hit ? " | 🎯TP1✅" : ""}
                    {pos.btc_bull_at_entry ? " | 🟢" : " | 🔴"}
                  </span>
                  <span style={{ color: pctFromEntry >= 0 ? COLORS.green : COLORS.red, fontWeight: "bold" }}>
                    {pctFromEntry >= 0 ? "+" : ""}{pctFromEntry.toFixed(2)}%
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Recent Trades */}
      <div style={{ marginBottom: "16px" }}>
        <div style={s.secTitle}>Recent Trades (last 15)</div>
        {recent.length === 0 ? (
          <div style={s.noData}>No closed trades yet</div>
        ) : (
          <div style={s.card}>
            <table style={s.table}>
              <thead>
                <tr>
                  <th style={s.th}>Token</th>
                  <th style={s.th}>Entry</th>
                  <th style={s.th}>Exit</th>
                  <th style={s.th}>Hold</th>
                  <th style={s.th}>PnL%</th>
                  <th style={s.th}>PnL$</th>
                  <th style={s.th}>Type</th>
                  <th style={s.th}>BTC</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((t, i) => (
                  <tr key={i}>
                    <td style={{ ...s.td, fontWeight: "bold", color: "#fff" }}>{t.symbol.replace("USDT","")}</td>
                    <td style={{ ...s.td, color: COLORS.gray }}>{t.entry_time.slice(11,16)} {t.entry_time.slice(5,10)}</td>
                    <td style={{ ...s.td, color: COLORS.gray }}>{t.exit_time.slice(11,16)}</td>
                    <td style={{ ...s.td, color: COLORS.gray }}>{t.held_hours}h</td>
                    <td style={{ ...s.td, color: t.pnl_pct > 0 ? COLORS.green : COLORS.red }}>{fmt(t.pnl_pct)}%</td>
                    <td style={{ ...s.td, color: t.pnl_usd > 0 ? COLORS.green : COLORS.red }}>{fmtUSD(t.pnl_usd)}</td>
                    <td style={{ ...s.td, color: t.exit_type === "SL" ? COLORS.red : t.exit_type === "TRAIL" ? COLORS.green : COLORS.gray }}>{t.exit_type}</td>
                    <td style={{ ...s.td, color: t.btc_bull ? COLORS.green : COLORS.red }}>{t.btc_bull ? "↑" : "↓"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div style={{ textAlign: "center", fontSize: "10px", color: "#333", marginTop: "20px" }}>
        Jarvis Trading Dashboard • SMC v3.1 • Paper Mode • zeerotoai.com
      </div>
    </div>
  );
}
