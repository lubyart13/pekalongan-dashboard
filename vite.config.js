import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Content Security Policy — pertahanan berlapis terhadap sisipan skrip asing
// (mis. skrip "judol"). Hanya sumber di bawah ini yang diizinkan; skrip
// eksternal, inline script, iframe, dan popup yang tidak dikenal akan diblokir
// oleh browser.
const csp = [
  "default-src 'self'",
  // Skrip hanya dari origin sendiri — memblokir <script src="judol..."> dan inline script.
  "script-src 'self'",
  // React & Recharts memakai inline style (atribut style), Google Fonts memuat CSS.
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data:",
  "connect-src 'self'",
  // Blokir <object>/<embed> dan iframe (jalur umum konten judol).
  "object-src 'none'",
  "frame-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  // Paksa semua permintaan lewat HTTPS.
  "upgrade-insecure-requests",
].join('; ')

// Sisipkan meta CSP hanya pada build produksi, supaya `npm run dev`
// (butuh inline script HMR) tetap berjalan normal.
function cspPlugin() {
  return {
    name: 'inject-csp',
    apply: 'build',
    transformIndexHtml() {
      // head-prepend -> CSP jadi tag paling awal di <head>, sehingga mengatur
      // SEMUA resource yang dimuat setelahnya (skrip, font, dsb).
      return [
        {
          tag: 'meta',
          attrs: { 'http-equiv': 'Content-Security-Policy', content: csp },
          injectTo: 'head-prepend',
        },
        {
          tag: 'meta',
          attrs: { name: 'referrer', content: 'strict-origin-when-cross-origin' },
          injectTo: 'head-prepend',
        },
      ]
    },
  }
}

// base: './' -> aman untuk GitHub Pages apa pun nama repo-nya (tidak blank page)
export default defineConfig({
  plugins: [react(), cspPlugin()],
  base: './',
  build: {
    // Tanpa polyfill inline modulepreload -> tidak ada inline script,
    // sehingga script-src 'self' (tanpa 'unsafe-inline') tetap aman & berfungsi.
    modulePreload: { polyfill: false },
  },
})
