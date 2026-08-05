import Batik from "./Batik.jsx";
import { PROJ_YEARS, POV, fmt } from "../data.js";

const CARDS = [
  { lab: "Persentase Miskin (%)", k: "persen", dec: 2 },
  { lab: "Jumlah Miskin (ribu)", k: "jumlah", dec: 2 },
  { lab: "Garis Kemiskinan (Rp)", k: "garis", dec: 0 },
];

export default function Projection() {
  return (
    <div className="proj-band">
      <Batik />
      <div className="wrap-in">
        <div className="sec-head">
          <span className="sec-num" style={{ color: "#F0B95A" }}>04</span>
          <h2>Proyeksi 2026–2028</h2>
        </div>
        <p className="sec-sub">
          Skenario dasar bila tren berlanjut, hasil model peramalan terbaik per indikator.
        </p>
        <div className="proj-grid">
          {CARDS.map((o) => (
            <div className="proj-card" key={o.k}>
              <div className="pc-lab">{o.lab}</div>
              <table>
                <tbody>
                  {PROJ_YEARS.map((y, i) => (
                    <tr key={y}>
                      <td>{y}</td>
                      <td className="tnum">{fmt(POV[o.k].proj[i], o.dec)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
        <p className="method">
          Metode: dibandingkan <b>Regresi Linear</b>, <b>Regresi Kuadratik</b>, dan{" "}
          <b>Holt (exponential smoothing)</b>; dievaluasi pada data uji 2024–2025 (MAPE terkecil).
          Holt terpilih untuk ketiga indikator (MAPE 0,28% / 1,52% / 1,77%). Proyeksi adalah skenario
          dasar berasumsi tren berlanjut tanpa guncangan, bukan kepastian — disajikan sebagai bahan
          perencanaan, bukan angka final.
        </p>
      </div>
    </div>
  );
}
