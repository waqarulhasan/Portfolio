import { ImageResponse } from "next/og";
import { site } from "@/lib/data";

export const alt = `${site.name} — ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social preview image generated at build time. */
export default function OgImage() {
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
          color: "white",
          backgroundColor: "#05060b",
          backgroundImage: "linear-gradient(135deg, #12235a 0%, #05060b 50%, #2a1260 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 22,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 800,
              backgroundImage: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            }}
          >
            {site.initials}
          </div>
          <div style={{ fontSize: 26, color: "#a5b4fc" }}>{site.availability}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 800, letterSpacing: -3 }}>{site.name}</div>
          <div style={{ fontSize: 40, color: "#c4b5fd", marginTop: 8 }}>{site.title}</div>
          <div style={{ fontSize: 26, color: "#94a3b8", marginTop: 24 }}>
            ASP.NET Core · React · Angular · React Native · Azure · AWS
          </div>
        </div>
      </div>
    ),
    size,
  );
}
