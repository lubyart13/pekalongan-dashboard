import Hero from "./components/Hero.jsx";
import KpiGrid from "./components/KpiGrid.jsx";
import PovertyChart from "./components/PovertyChart.jsx";
import IndicatorCharts from "./components/IndicatorCharts.jsx";
import Projection from "./components/Projection.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import TileRule from "./components/TileRule.jsx";

export default function App() {
  return (
    <>
      <span id="top" />
      <Navbar />
      <Hero />
      <TileRule />
      <section id="ringkasan">
        <div className="wrap">
          <div className="sec-head"><span className="sec-num">01</span><h2>Potret terkini · 2025</h2></div>
          <p className="sec-sub">
            Nilai terbaru tiap indikator beserta perubahannya dibanding tahun sebelumnya.
            Panah hijau menandai perubahan yang menguntungkan.
          </p>
          <KpiGrid />
        </div>
      </section>

      <div className="divider" />

      <section id="kemiskinan">
        <div className="wrap">
          <div className="sec-head"><span className="sec-num">02</span><h2>Kemiskinan &amp; peramalan</h2></div>
          <p className="sec-sub">
            Deret 10 tahun (2016–2025) dengan proyeksi tiga tahun ke depan. Garis penuh = data aktual
            BPS; garis putus-putus = hasil peramalan model Holt (exponential smoothing).
          </p>
          <PovertyChart />
        </div>
      </section>

      <div className="divider" />

      <section id="lainnya">
        <div className="wrap">
          <div className="sec-head"><span className="sec-num">03</span><h2>Pembangunan manusia, kerja &amp; ekonomi</h2></div>
          <p className="sec-sub">
            Indikator pendamping 2021–2025. IPM dibandingkan dengan rata-rata Provinsi Jawa Tengah
            sebagai tolok ukur.
          </p>
          <IndicatorCharts />
        </div>
      </section>

      <section id="proyeksi">
        <div className="wrap">
          <Projection />
        </div>
      </section>

      <section id="tentang">
        <div className="wrap">
          <div className="sec-head"><span className="sec-num">05</span><h2>Tentang &amp; data terbuka</h2></div>
          <About />
        </div>
      </section>

      <Footer />
    </>
  );
}
