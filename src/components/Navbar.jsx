import { useState } from "react";

const LINKS = [
  { href: "#ringkasan", t: "Ringkasan" },
  { href: "#kemiskinan", t: "Kemiskinan" },
  { href: "#lainnya", t: "Indikator" },
  { href: "#proyeksi", t: "Proyeksi" },
  { href: "#tentang", t: "Tentang" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="wrap nav-in">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand-dot" />
          <span>Indikator <b>Kota Pekalongan</b></span>
        </a>

        <button
          className="nav-toggle"
          aria-label="Buka menu"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        <div id="nav-links" className={"nav-links" + (open ? " open" : "")}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.t}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}
