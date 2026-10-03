import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #f6efe6 0%, #eadfd3 45%, #6b2c38 160%)",
          color: "#2a1a18",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 4, textTransform: "uppercase", color: "#6b2c38" }}>
          Triora Labs
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, lineHeight: 1.05, maxWidth: 900 }}>Websites, Apps & Ads that Grow Business</div>
          <div style={{ fontSize: 28, color: "#6d5c56", maxWidth: 820 }}>
            Digital products, performance media, and conversion tracking — built as one system.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
