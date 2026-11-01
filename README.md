# Hourly Candles · NSE & BSE

A free web screen for Indian stocks: search any NSE/BSE stock or index, add several to one screen, and see 1-hour candles (09:15–15:30 IST) with open/close, day high/low, previous close and an hourly trend strip.

- No AI, no paid APIs, no login.
- Frontend: plain HTML + [TradingView Lightweight Charts](https://github.com/tradingview/lightweight-charts).
- Backend: two tiny Vercel serverless functions in `api/` that fetch data from Yahoo Finance (NSE near real-time, BSE ~15 min delayed).

## Deploy (free)

1. Go to <https://vercel.com>, sign in with GitHub.
2. **Add New → Project**, pick this repo, click **Deploy** (no settings needed).
3. You get a link like `https://hourly-candles.vercel.app` to share.

Every push to `main` redeploys automatically.

Opened without the backend (e.g. as a plain file or on GitHub Pages), the page falls back to simulated demo data.

Data is from Yahoo Finance's unofficial endpoints, for personal/informational use. Not investment advice.
