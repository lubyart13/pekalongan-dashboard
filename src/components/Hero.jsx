import Batik from "./Batik.jsx";

export default function Hero() {
  return (
    <header className="hero">
      <Batik />
      <div className="wrap">
        <span className="eyebrow"><span className="dot" />Kota Pekalongan · Kota Batik Dunia</span>
        <h1>Indikator Sosial-Ekonomi, dari <em>angka</em> menjadi arah</h1>
        <p className="lede">
          Visualisasi dan peramalan indikator kunci Kota Pekalongan berbasis data resmi BPS.
          Menjadikan publikasi statistik yang statis sebagai alat baca tren dan proyeksi untuk
          perencanaan pembangunan daerah.
        </p>
        <div className="meta">
          <span>Sumber: <b>BPS — Kota Pekalongan Dalam Angka 2026</b></span>
          <span>Cakupan: <b>tingkat kota</b></span>
        </div>
        <div><span className="scope">Data historis 2016–2025 · Proyeksi 2026–2028</span></div>
      </div>
    </header>
  );
}
