import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f5f3ff",
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
            fontSize: 20,
            fontWeight: 600,
            color: "#7c40cf",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          OnTrack · Gym
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            color: "#1e1b2e",
            textAlign: "center",
            lineHeight: 1.15,
          }}
        >
          Log lifts. See progress.
          <br />
          Stay on track.
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#64748b",
            textAlign: "center",
            maxWidth: 700,
          }}
        >
          Mobile-first workout tracker for individual lifters.
        </div>
      </div>
    ),
    { ...size }
  );
}
