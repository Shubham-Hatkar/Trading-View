// Vercel serverless function: proxies Yahoo Finance symbol search.
// GET /api/search?q=reliance
export default async function handler(req, res) {
  const q = String(req.query.q || '').trim().slice(0, 50);
  if (!q) return res.status(400).json({ error: 'Missing q' });

  const url = `https://query2.finance.yahoo.com/v1/finance/search?q=${encodeURIComponent(q)}&quotesCount=12&newsCount=0&listsCount=0`;
  try {
    const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0', Accept: 'application/json' } });
    const body = await r.text();
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-maxage=3600');
    return res.status(r.status).send(body);
  } catch (e) {
    return res.status(502).json({ error: 'Upstream fetch failed' });
  }
}
