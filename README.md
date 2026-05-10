# Archway Indonesia — Link Page

React + Vite + Tailwind + Framer Motion

## Stack
- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion 11
- React Icons 5

## Setup

### Install dependensi
```bash
npm install
```

### Tambah video background
Taruh file video kamu di:
```
src/assets/videos/background.webm
```

### Jalankan dev server
```bash
npm run dev
```

Buka browser → `http://localhost:5173`

### Build untuk production
```bash
npm run build
```

Output ada di folder `dist/`

---

## Edit konten

Semua tombol & link ada di satu file:
```
src/data/links.js
```

Ganti `url`, `title`, dan `icon` sesuai kebutuhan.

---

## Struktur
```
src/
├── assets/
│   ├── images/
│   ├── videos/        ← taruh background.webm di sini
│   └── icons/
├── components/
│   ├── Hero.jsx
│   ├── MenuCard.jsx
│   ├── MenuSection.jsx
│   ├── Socials.jsx
│   └── BackgroundEffects.jsx
├── data/
│   └── links.js       ← edit tombol di sini
├── styles/
│   ├── globals.css
│   └── animations.css
├── App.jsx
└── main.jsx
```
