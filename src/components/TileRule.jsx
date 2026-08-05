export default function TileRule() {
  const svg =
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='14'><path d='M0 14 L7 0 L14 14 L21 0 L28 14' fill='none' stroke='%23E2A32B' stroke-width='1.4'/></svg>\")";
  return <div className="tile-rule" style={{ backgroundImage: svg }} />;
}
