# Amos Original Torsion — Telegram Mini App

Professional sneaker store Mini App for **Amos Original Torsion**  
📍 Addis Ababa | Bole Bulbula, Amhara Bank Ground Floor  
📞 090 062 0856  
Telegram: [t.me/Amosorginaltorshion](https://t.me/Amosorginaltorshion)  
TikTok: [@amostorshin.store](https://www.tiktok.com/@amostorshin.store)

---

## Features

- Modern dark UI optimized for Telegram
- Product catalog (Running, Lifestyle, Training, Basketball)
- Filtering & sorting
- Size selection + quantity
- Shopping cart (saved in browser)
- Checkout form
- Prices in **ETB** (Ethiopian Birr)
- Free delivery on orders over **8,000 ETB**
- Real shop location & contact links
- Full Telegram WebApp integration (MainButton, BackButton, sendData, haptics)

## How to Launch

1. **Host the files**  
   Upload `index.html`, `styles.css`, `app.js` to any static host  
   (Vercel, Netlify, GitHub Pages, Cloudflare Pages…).

2. **Connect to your bot**  
   In [@BotFather](https://t.me/BotFather):
   - `/setmenubutton` → set your hosted URL
   - Or send an inline button with web_app url

3. **Receive orders**  
   When a customer places an order the Mini App sends data to your bot via `Telegram.WebApp.sendData()`.  
   Your bot will receive a `web_app_data` update with the full order (name, phone, address, items, total in ETB).

## Customization

- Change products → edit the `PRODUCTS` array in `app.js`
- Change colors → edit CSS variables in `styles.css` (`--accent` is currently orange)
- Free delivery threshold → `FREE_DELIVERY` constant in `app.js`

---

Built for **Amos Original Torsion** · Addis Ababa
