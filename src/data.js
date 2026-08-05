// ------- DATA terverifikasi dari BPS, Kota Pekalongan Dalam Angka 2026 -------
export const YEARS = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
export const PROJ_YEARS = [2026, 2027, 2028];

// Tabel 4.4.1 — Kemiskinan Kota Pekalongan 2016–2025 (Susenas Maret)
// Proyeksi 2026–2028 = model Holt (exponential smoothing)
export const POV = {
  persen: {
    label: "Persentase Penduduk Miskin", unit: "%", dec: 2, goodDown: true,
    hist: [7.92, 7.47, 6.75, 6.60, 7.17, 7.59, 7.00, 6.81, 6.71, 6.14],
    proj: [5.78, 5.35, 4.91],
  },
  jumlah: {
    label: "Jumlah Penduduk Miskin", unit: " ribu", dec: 2, goodDown: true,
    hist: [23.65, 22.51, 20.52, 20.21, 22.16, 23.49, 21.81, 21.36, 21.16, 19.49],
    proj: [18.48, 17.22, 15.97],
  },
  garis: {
    label: "Garis Kemiskinan", unit: " Rp/kapita/bln", dec: 0, goodDown: false,
    hist: [375600, 390555, 415172, 425026, 502031, 480415, 513243, 565998, 605312, 639402],
    proj: [675681, 711960, 748239],
  },
};

// Indikator pendamping 2021–2025 (Tabel perbandingan antar kab/kota)
export const Y5 = [2021, 2022, 2023, 2024, 2025];
export const IPM_KOTA = [75.40, 75.90, 76.71, 77.21, 77.76];
export const IPM_JATENG = [72.17, 72.80, 73.39, 73.87, 74.77];
export const TPT = [6.89, 4.98, 5.02, 4.91, 4.83];        // Tingkat Pengangguran Terbuka (%)
export const TPAK = [75.77, 70.35, 73.95, 76.06, 75.34];  // Tingkat Partisipasi Angkatan Kerja (%)
export const PDRB = [3.59, 5.76, 5.44, 5.35, 5.88];       // Laju pertumbuhan PDRB ADHK (%)

export const KPI = [
  { lab: "Persentase Kemiskinan", val: 6.14, prev: 6.71, unit: "%", dec: 2, goodDown: true },
  { lab: "IPM", val: 77.76, prev: 77.21, unit: "", dec: 2, goodDown: false },
  { lab: "Pengangguran (TPT)", val: 4.83, prev: 4.91, unit: "%", dec: 2, goodDown: true },
  { lab: "Pertumbuhan Ekonomi", val: 5.88, prev: 5.35, unit: "%", dec: 2, goodDown: false },
  { lab: "Partisipasi Kerja (TPAK)", val: 75.34, prev: 76.06, unit: "%", dec: 2, goodDown: false },
];

// ------- palet batik pesisir Pekalongan -------
export const C = {
  indigo: "#20265B", indigo2: "#333C87", soft: "#5661A8",
  coral: "#E8564A", gold: "#E2A32B", teal: "#188F81", plum: "#8A4A6B",
  ink: "#181B33", muted: "#6A6E85", line: "#E6E3D8",
};

export const fmt = (v, dec = 2) =>
  v == null ? "" : Number(v).toLocaleString("id-ID", { minimumFractionDigits: dec, maximumFractionDigits: dec });

// ------- CSV untuk fitur unduh data terbuka -------
export function datasetCSV() {
  const rows = [["indikator", "tahun", "nilai", "tipe"]];
  Object.values(POV).forEach((d) => {
    d.hist.forEach((v, i) => rows.push([`"${d.label}"`, YEARS[i], v, "aktual"]));
    d.proj.forEach((v, i) => rows.push([`"${d.label}"`, PROJ_YEARS[i], v, "proyeksi"]));
  });
  const add = (label, arr) => arr.forEach((v, i) => rows.push([`"${label}"`, Y5[i], v, "aktual"]));
  add("IPM Kota Pekalongan", IPM_KOTA);
  add("IPM Jawa Tengah", IPM_JATENG);
  add("Tingkat Pengangguran Terbuka (%)", TPT);
  add("Tingkat Partisipasi Angkatan Kerja (%)", TPAK);
  add("Pertumbuhan PDRB ADHK (%)", PDRB);
  return rows.map((r) => r.join(",")).join("\n");
}
