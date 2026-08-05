import { KPI, fmt } from "../data.js";

export default function KpiGrid() {
  return (
    <div className="kpis">
      {KPI.map((k) => {
        const d = k.val - k.prev;
        const improved = k.goodDown ? d < 0 : d > 0;
        const arrow = d > 0 ? "▲" : d < 0 ? "▼" : "■";
        return (
          <div className="kpi" key={k.lab}>
            <div className="k-lab">{k.lab}</div>
            <div className="k-val tnum">{fmt(k.val, k.dec)}<span className="k-unit">{k.unit}</span></div>
            <div className={"k-delta tnum " + (improved ? "good" : "bad")}>
              {arrow} {fmt(Math.abs(d), k.dec)} <span className="yr">vs 2024</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
