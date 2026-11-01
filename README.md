# Hourly Candles · NSE & BSE

A free web screen for Indian stocks: search any NSE/BSE stock or index, add several to one screen, and see 1-hour candles (09:15–15:30 IST) with open/close, day high/low, previous close and an hourly trend strip.

- **5 themes**, one tap to switch (remembered in your browser):
  - **Classic**: dark cards with a full candle chart and hourly table
  - **Heat Strip**: one row per stock, one coloured box per hour; tap a row for details
  - **Big Candle**: the current hour drawn as one big labelled candle, plus small candles for each hour
  - **Range Terminal**: compact black-and-amber layout with day-range bars
  - **Focus Swipe**: one stock at a time, with a big price, a chart, a this-hour progress bar and hour-by-hour bars; swipe to switch
- **Live switch** (off by default): off = refresh once a minute, on = every 15 seconds while the market is open.
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
