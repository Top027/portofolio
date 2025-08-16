
# Taufiq Hidayat — Cloud Engineer

Website portofolio pribadi yang modern, responsif, dan SEO-friendly. Dibangun dengan HTML + CSS + JavaScript (tanpa build step) agar mudah dijalankan di mana saja.

## Struktur Folder
```
/assets
  /images
  /css
  /js
/components           # (kosong, disiapkan bila ingin pakai framework)
/pages                # Home, About, Skills, Experience, Portfolio, Contact
index.html
README.md
```

## Cara Menjalankan
1. **Lokal (cukup buka file):**
   - Klik ganda `index.html` di browser modern (Chrome, Edge, Firefox, Safari).

2. **Menjalankan dengan server lokal (disarankan untuk navigasi rapi):**
   - Python 3:
     ```bash
     cd taufiq-portfolio
     python -m http.server 8080
     # buka http://localhost:8080
     ```
   - Node (opsional):
     ```bash
     npx serve .
     # buka http://localhost:3000 (default serve)
     ```

3. **Deploy ke hosting statis:**
   - **GitHub Pages**: push repo lalu aktifkan Pages pada branch `main` dan folder `/root`.
   - **Netlify/Vercel**: drag & drop folder ke dashboard (framework: none).

## Kustomisasi Cepat
- **Foto & gambar**: ganti file di `/assets/images/` (mis. `profile.svg`).
- **CV**: letakkan `Taufiq-Hidayat-CV.pdf` ke folder `/assets/` agar tombol "Download CV" aktif.
- **Warna/tema**: edit variabel CSS di `assets/css/styles.css`.
- **Dark/Light mode**: sudah otomatis; tombol 🌓 untuk toggle, preferensi disimpan di `localStorage`.
- **SEO**: edit `<title>`, `<meta name="description">`, serta JSON-LD di setiap halaman.

## Catatan
- Formulir kontak menggunakan **mailto** sebagai fallback agar bisa berjalan tanpa backend. Anda dapat mengganti dengan layanan seperti Formspree/EmailJS atau backend sendiri.
- Folder `/components` disediakan jika ingin migrasi ke React/Next.js nanti.

Selamat berkarya!
