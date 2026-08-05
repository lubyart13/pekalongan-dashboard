import { datasetCSV } from "../data.js";

export default function About() {
  const handleDownload = () => {
    const blob = new Blob([datasetCSV()], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "indikator-sosial-ekonomi-kota-pekalongan.csv";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="panel about">
      <div className="about-grid">
        <div>
          <div className="p-title">Tentang &amp; metodologi</div>
          <p className="about-p">
            Dashboard ini menyajikan indikator sosial-ekonomi Kota Pekalongan dari publikasi resmi
            BPS <i>Kota Pekalongan Dalam Angka 2026</i>, agar data yang semula tersebar dalam ratusan
            halaman dapat dibaca sebagai tren dan proyeksi untuk perencanaan pembangunan.
          </p>
          <p className="about-p">
            <b>Sumber per indikator.</b> Kemiskinan (garis, jumlah, persentase) dari Susenas Maret,
            deret 2016–2025; IPM serta TPT/TPAK dari Sakernas, 2021–2025; laju pertumbuhan PDRB atas
            dasar harga konstan dari Sistem Neraca Regional, 2021–2025.
          </p>
          <p className="about-p">
            <b>Peramalan.</b> Tiga metode dibandingkan — Regresi Linear, Regresi Kuadratik, dan Holt
            (exponential smoothing) — dievaluasi pada data uji 2024–2025 dengan MAPE. Model Holt
            terpilih untuk indikator kemiskinan (MAPE 0,28% / 1,52% / 1,77%), lalu dilatih ulang pada
            seluruh data untuk memproyeksikan 2026–2028.
          </p>
          <p className="about-p muted-note">
            <b>Keterbatasan.</b> Proyeksi merupakan skenario dasar dengan asumsi tren berlanjut tanpa
            guncangan, bukan angka final. Deret waktu relatif pendek sehingga hasil bersifat indikatif.
          </p>
        </div>
        <aside className="about-side">
          <div className="pc-lab" style={{ color: "var(--muted)" }}>Data terbuka</div>
          <p className="about-p" style={{ marginTop: 8 }}>
            Seluruh data yang dipakai dapat diunduh dalam format CSV untuk ditelaah ulang.
          </p>
          <button className="btn-download" onClick={handleDownload}>
            <span className="dl-ico" aria-hidden="true">↓</span> Unduh data (CSV)
          </button>
          <div className="src-tag">BPS · Katalog 1102001.3375</div>
        </aside>
      </div>
    </div>
  );
}
