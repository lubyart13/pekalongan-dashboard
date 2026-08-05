import { useState } from "react";
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from "recharts";
import { YEARS, PROJ_YEARS, POV, C, fmt } from "../data.js";

const TABS = [
  { k: "persen", t: "Persentase (%)" },
  { k: "jumlah", t: "Jumlah (ribu)" },
  { k: "garis", t: "Garis Kemiskinan" },
];

function buildData(k) {
  const d = POV[k];
  const hist = YEARS.map((y, i) => ({
    year: y,
    aktual: d.hist[i],
    proyeksi: i === YEARS.length - 1 ? d.hist[i] : null, // sambung di 2025
  }));
  const proj = PROJ_YEARS.map((y, i) => ({ year: y, aktual: null, proyeksi: d.proj[i] }));
  return hist.concat(proj);
}

function TipContent({ active, payload, label, dec, unit }) {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="tip">
      <div className="tip-h">{label}</div>
      {payload.filter((p) => p.value != null).map((p) => (
        <div key={p.name} className="tip-row">
          <span className="tip-dot" style={{ background: p.color }} />
          {p.name}: <b>{fmt(p.value, dec)}{unit}</b>
        </div>
      ))}
    </div>
  );
}

export default function PovertyChart() {
  const [k, setK] = useState("persen");
  const d = POV[k];
  const data = buildData(k);
  const dir = d.goodDown ? "menurun" : "meningkat";

  return (
    <div className="panel feature">
      <div className="p-head">
        <div>
          <div className="p-title">{d.label}</div>
          <div className="p-note">
            Nilai 2025: {fmt(d.hist[9], d.dec)}{d.unit} · proyeksi 2028: {fmt(d.proj[2], d.dec)}{d.unit} ({dir}).
          </div>
        </div>
        <div className="toggle" role="group" aria-label="Pilih indikator kemiskinan">
          {TABS.map((t) => (
            <button key={t.k} aria-pressed={k === t.k} onClick={() => setK(t.k)}>{t.t}</button>
          ))}
        </div>
      </div>

      <div className="chart-box" style={{ height: 340 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 12, left: 4, bottom: 4 }}>
            <defs>
              <linearGradient id="povFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={C.coral} stopOpacity={0.18} />
                <stop offset="100%" stopColor={C.coral} stopOpacity={0.01} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(24,27,51,.06)" vertical={false} />
            <XAxis dataKey="year" tickLine={false} axisLine={false} tick={{ fill: C.muted, fontSize: 12 }} />
            <YAxis tickLine={false} axisLine={false} tick={{ fill: C.muted, fontSize: 12 }}
              tickFormatter={(v) => fmt(v, 0)} width={54} />
            <Tooltip content={<TipContent dec={d.dec} unit={d.unit} />} />
            <Area type="monotone" dataKey="aktual" name="Aktual" stroke={C.coral} strokeWidth={3}
              fill="url(#povFill)" dot={{ r: 3, fill: C.coral }} activeDot={{ r: 6 }} connectNulls={false} />
            <Area type="monotone" dataKey="proyeksi" name="Proyeksi" stroke={C.soft} strokeWidth={2.6}
              strokeDasharray="7 5" fill="transparent"
              dot={{ r: 3, fill: C.soft }} activeDot={{ r: 6 }} connectNulls />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="legend">
        <span><i style={{ borderColor: C.coral }} />Aktual (2016–2025)</span>
        <span><i className="dash" style={{ borderColor: C.soft }} />Proyeksi (2026–2028)</span>
      </div>
    </div>
  );
}
