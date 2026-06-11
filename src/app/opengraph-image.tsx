import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #030712 0%, #0f172a 50%, #1e1b4b 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: 20,
            background: "linear-gradient(135deg, #2563eb, #06b6d4)",
            fontSize: 32,
            fontWeight: 700,
            marginBottom: 32,
          }}
        >
          AA
        </div>
        <div style={{ fontSize: 52, fontWeight: 700, marginBottom: 16, textAlign: "center", padding: "0 40px" }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 24, color: "#94a3b8", marginBottom: 8 }}>
          Software Engineer · AI Engineer · Cloud Computing
        </div>
        <div style={{ fontSize: 18, color: "#64748b" }}>
          Jeddah & Riyadh, Saudi Arabia
        </div>
      </div>
    ),
    { ...size }
  );
}
