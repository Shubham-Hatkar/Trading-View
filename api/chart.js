// Vercel serverless function: proxies Yahoo Finance 1-hour candles.
// GET /api/chart?symbol=RELIANCE.NS&range=5d
const RANGES = new Set(['1d', '5d', '1mo']);
const SYMBOL_RE = /^\^?[A-Z0-9&.\-]{1,25}$/;

export default async function handler(req, res) {
  const symbol = String(req.query.symbol || '').toUpperCase();
  const range = String(req.query.range || '5d');
  if (!SYMBOL_RE.test(symbol)) return res.status(400).json({ error: 'Bad symbol' });
  if (!RANGES.has(range)) return res.status(400).json({ error: 'Bad range' });

  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?interval=60m&range=${range}&includePrePost=false`;
  try {
    const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0', Accept: 'application/json' } });
    const body = await r.text();
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate=20');
    return res.status(r.status).send(body);
  } catch (e) {
    return res.status(502).json({ error: 'Upstream fetch failed' });
  }
}
