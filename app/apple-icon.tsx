import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#fef9ee",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg viewBox="0 0 100 100" width={120} height={120}>
          <rect width="100" height="100" rx="18" fill="#0d9488" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="8" />
          <circle cx="35" cy="24" r="5" fill="white" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
