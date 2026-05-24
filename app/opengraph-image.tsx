import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f0fdfa",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 80,
          gap: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 8,
          }}
        >
          <svg viewBox="0 0 100 100" width={72} height={72}>
            <rect width="100" height="100" rx="18" fill="#0d9488" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="8" />
            <circle cx="35" cy="24" r="5" fill="white" />
          </svg>
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, color: "#134e4a", lineHeight: 1.1 }}>
          On Track Guru
        </div>
        <div style={{ fontSize: 26, color: "#64748b", textAlign: "center", maxWidth: 700 }}>
          A focused family of apps for the things that matter.
        </div>
      </div>
    ),
    { ...size }
  );
}
