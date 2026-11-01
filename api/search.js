import { yahoo } from './_yahoo.js';

export default async function handler(req, res) {
  const q = String(req.query.q || '').slice(0, 40);
  if (!q.trim()) return res.status(200).json({ quotes: [] });
  return yahoo(res, `/v1/finance/search?q=${encodeURIComponent(q)}&quotesCount=15&newsCount=0&listsCount=0&region=IN&lang=en-IN`, 3600);
}
