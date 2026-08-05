# Dashboard Indikator Sosial-Ekonomi Kota Pekalongan

Sistem Informasi Visualisasi & Peramalan Indikator Sosial-Ekonomi Kota Pekalongan,
berbasis data BPS **Kota Pekalongan Dalam Angka 2026**. Dibangun dengan React + Vite,
grafik memakai Recharts. Menampilkan tren 2016–2025 dan proyeksi 2026–2028 (model Holt).

## Menjalankan secara lokal

```bash
npm install
npm run dev        # buka http://localhost:5173
```

Build produksi:

```bash
npm run build      # hasil di folder dist/
npm run preview    # cek hasil build
```

## Deploy ke GitHub Pages (otomatis)

1. Buat repo baru di GitHub, mis. `pekalongan-dashboard`.
2. Unggah seluruh isi folder ini ke repo (branch `main`).
3. Di GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Setiap `push` ke `main` akan otomatis build & terbit lewat workflow
   `.github/workflows/deploy.yml`. Alamat situs: `https://<username>.github.io/<nama-repo>/`.

> Konfigurasi `base: './'` pada `vite.config.js` membuat situs tetap tampil benar
> di sub-path GitHub Pages (tidak blank), apa pun nama repo-nya.

## Sumber data

Badan Pusat Statistik, *Kota Pekalongan Dalam Angka 2026* (Katalog 1102001.3375).
Kemiskinan: Susenas Maret; IPM & TPT/TPAK: Sakernas; PDRB: Sistem Neraca Regional.
Angka proyeksi merupakan skenario dasar (asumsi tren berlanjut), bukan angka final.

## Struktur

```
src/
  data.js                 # seluruh data terverifikasi + palet + util
  App.jsx                 # susunan halaman
  components/
    Navbar.jsx            # menu navigasi sticky
    Hero.jsx  Batik.jsx  TileRule.jsx
    KpiGrid.jsx           # kartu ringkasan 2025
    PovertyChart.jsx      # grafik kemiskinan + toggle + proyeksi
    IndicatorCharts.jsx   # IPM, ketenagakerjaan, PDRB
    Projection.jsx
    About.jsx             # Tentang, metodologi, unduh data CSV
    Footer.jsx
```
