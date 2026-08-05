import {
  ResponsiveContainer, LineChart, Line, AreaChart, Area, BarChart, Bar, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from "recharts";
import { Y5, IPM_KOTA, IPM_JATENG, TPT, TPAK, PDRB, C, fmt } from "../data.js";

const ipmData = Y5.map((y, i) => ({ year: y, Pekalongan: IPM_KOTA[i], "Jawa Tengah": IPM_JATENG[i] }));
const kerjaData = Y5.map((y, i) => ({ year: y, TPAK: TPAK[i], TPT: TPT[i] }));
const pdrbData = Y5.map((y, i) => ({ year: y, PDRB: PDRB[i] }));
const barColors = ["#5661A8", "#333C87", "#20265B", "#8A4A6B", "#E2A32B"];

function Tip({ active, payload, label, suffix = "", dec = 2 }) {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="tip">
      <div className="tip-h">{label}</div>
      {payload.map((p) => (
        <div key={p.name} className="tip-row">
          <span className="tip-dot" style={{ background: p.color || p.fill }} />
          {p.name}: <b>{fmt(p.value, dec)}{suffix}</b>
        </div>
      ))}
    </div>
  );
}

const axis = { tickLine: false, axisLine: false, tick: { fill: C.muted, fontSize: 12 } };
const grid = <CartesianGrid stroke="rgba(24,27,51,.06)" vertical={false} />;

export default function IndicatorCharts() {
  return (
    <div className="grid g-3">
      {/* IPM */}
      <div className="panel">
        <div className="p-title">Indeks Pembangunan Manusia</div>
        <div className="p-note">Kota Pekalongan vs Jawa Tengah</div>
        <div className="chart-box" style={{ height: 230 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={ipmData} margin={{ top: 8, right: 10, left: -8, bottom: 0 }}>
              {grid}
              <XAxis dataKey="year" {...axis} />
              <YAxis domain={[70, 79]} {...axis} width={34} />
              <Tooltip content={<Tip />} />
              <Legend iconType="plainline" wrapperStyle={{ fontSize: 11, paddingTop: 6 }} />
              <Line type="monotone" dataKey="Pekalongan" stroke={C.indigo2} strokeWidth={3}
                dot={{ r: 3, fill: C.indigo2 }} activeDot={{ r: 5 }} />
              <Line type="monotone" dataKey="Jawa Tengah" stroke={C.gold} strokeWidth={2.4}
                strokeDasharray="6 4" dot={{ r: 3, fill: C.gold }} activeDot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Ketenagakerjaan */}
      <div className="panel">
        <div className="p-title">Ketenagakerjaan</div>
        <div className="p-note">TPAK &amp; Tingkat Pengangguran Terbuka (%)</div>
        <div className="chart-box" style={{ height: 230 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={kerjaData} margin={{ top: 8, right: 10, left: -8, bottom: 0 }}>
              <defs>
                <linearGradient id="tpakFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={C.teal} stopOpacity={0.16} />
                  <stop offset="100%" stopColor={C.teal} stopOpacity={0.01} />
                </linearGradient>
              </defs>
              {grid}
              <XAxis dataKey="year" {...axis} />
              <YAxis domain={[0, 80]} {...axis} width={34} />
              <Tooltip content={<Tip suffix="%" />} />
              <Legend iconType="plainline" wrapperStyle={{ fontSize: 11, paddingTop: 6 }} />
              <Area type="monotone" dataKey="TPAK" stroke={C.teal} strokeWidth={3}
                fill="url(#tpakFill)" dot={{ r: 3, fill: C.teal }} activeDot={{ r: 5 }} />
              <Area type="monotone" dataKey="TPT" stroke={C.coral} strokeWidth={2.6}
                fill="transparent" dot={{ r: 3, fill: C.coral }} activeDot={{ r: 5 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* PDRB */}
      <div className="panel">
        <div className="p-title">Pertumbuhan Ekonomi</div>
        <div className="p-note">Laju pertumbuhan PDRB ADHK (%)</div>
        <div className="chart-box" style={{ height: 230 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={pdrbData} margin={{ top: 8, right: 10, left: -8, bottom: 0 }}>
              {grid}
              <XAxis dataKey="year" {...axis} />
              <YAxis domain={[0, 7]} {...axis} width={34} tickFormatter={(v) => v + "%"} />
              <Tooltip content={<Tip suffix="%" />} cursor={{ fill: "rgba(32,38,91,.05)" }} />
              <Bar dataKey="PDRB" radius={[7, 7, 0, 0]} maxBarSize={46}>
                {pdrbData.map((_, i) => <Cell key={i} fill={barColors[i]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
