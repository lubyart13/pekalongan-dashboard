// Motif batik jlamprang (rosette geometris) sebagai tekstur latar — signature visual
export default function Batik() {
  return (
    <svg className="batik" aria-hidden="true" width="100%" height="100%">
      <defs>
        <pattern id="jlamprang" width="86" height="86" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <circle cx="43" cy="43" r="4" fill="#E9C77C" />
          <circle cx="43" cy="43" r="15" fill="none" stroke="#E9C77C" strokeWidth="1.3" />
          <circle cx="43" cy="43" r="24" fill="none" stroke="#E8564A" strokeWidth="1.1" />
          <path d="M43 8 L50 20 L43 16 L36 20 Z" fill="#E9C77C" />
          <path d="M43 78 L50 66 L43 70 L36 66 Z" fill="#E9C77C" />
          <path d="M8 43 L20 50 L16 43 L20 36 Z" fill="#E9C77C" />
          <path d="M78 43 L66 50 L70 43 L66 36 Z" fill="#E9C77C" />
          <circle cx="0" cy="0" r="3" fill="#E8564A" />
          <circle cx="86" cy="0" r="3" fill="#E8564A" />
          <circle cx="0" cy="86" r="3" fill="#E8564A" />
          <circle cx="86" cy="86" r="3" fill="#E8564A" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#jlamprang)" />
    </svg>
  );
}
