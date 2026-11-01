import { yahoo } from './_yahoo.js';

const RANGES = new Set(['1d', '5d', '1mo', '3mo']);
const SYMBOL_RE = /^[A-Za-z0-9^&.\-]{1,30}$/;

export default async function handler(req, res) {
  const symbol = String(req.query.symbol || '');
  const range = String(req.query.range || '5d');
  if (!SYMBOL_RE.test(symbol) || !RANGES.has(range)) return res.status(400).json({ error: 'Bad symbol or range' });
  return yahoo(res, `/v8/finance/chart/${encodeURIComponent(symbol)}?interval=60m&range=${range}&includePrePost=false`, 10);
}
