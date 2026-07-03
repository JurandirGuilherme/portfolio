import { ImageResponse } from "next/og";
import { site } from "@/data/site";
import { en } from "@/data/content/en";

export const alt = `${site.name} — ${en.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "88px",
        background: "#0f1a20",
        color: "#eaf0f1",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 30,
          color: "#ff7a5c",
          letterSpacing: 2,
          marginBottom: 28,
        }}
      >
        {site.brand}
      </div>
      <div style={{ fontSize: 86, fontWeight: 700, lineHeight: 1.05 }}>
        {site.name}
      </div>
      <div style={{ fontSize: 40, color: "#57b0c1", marginTop: 22 }}>
        {en.role}
      </div>
      <div
        style={{
          height: 6,
          width: 180,
          background: "#ff7a5c",
          marginTop: 44,
          borderRadius: 3,
        }}
      />
      <div style={{ fontSize: 26, color: "#9fb0b5", marginTop: 44 }}>
        React · Next.js · TypeScript
      </div>
    </div>,
    { ...size },
  );
}
