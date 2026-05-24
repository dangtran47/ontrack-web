export function BrandMark({ fill = "#0d9488", size = 32 }: { fill?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      style={{ borderRadius: 8, flexShrink: 0 }}
    >
      <rect width="100" height="100" rx="18" fill={fill} />
      <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="8" />
      <circle cx="35" cy="24" r="5" fill="white" />
    </svg>
  );
}
