// Shared Yahoo Finance fetch for the Vercel functions (Node 18+, free Hobby plan).
const HOSTS = ['https://query1.finance.yahoo.com', 'https://query2.finance.yahoo.com'];

export async function yahoo(res, path, ttl) {
  let lastStatus = 502;
  for (const host of HOSTS) {
    try {
      const r = await fetch(host + path, {
        headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36', accept: 'application/json' }
      });
      if (r.ok || r.status === 404) {
        res.setHeader('content-type', 'application/json; charset=utf-8');
        res.setHeader('cache-control', r.ok ? `public, s-maxage=${ttl}, max-age=${ttl}` : 'no-store');
        return res.status(r.status).send(await r.text());
      }
      lastStatus = r.status;
    } catch (e) { /* try next host */ }
  }
  res.setHeader('content-type', 'application/json; charset=utf-8');
  return res.status(502).json({ error: 'Yahoo Finance did not respond (status ' + lastStatus + '). Try again in a minute.' });
}
