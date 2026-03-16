import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "David Liew - AI Solutions Architect";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0f172a",
        backgroundImage:
          "linear-gradient(135deg, #1e1b4b 0%, #0f172a 50%, #134e4a 100%)",
      }}
    >
      {/* Content container */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "60px",
        }}
      >
        {/* Headshot placeholder - circular with gradient border */}
        <div
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "100px",
            background: "linear-gradient(135deg, #ec4899 0%, #14b8a6 100%)",
            padding: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "192px",
              height: "192px",
              borderRadius: "96px",
              backgroundColor: "#1e293b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "80px",
            }}
          >
            DL
          </div>
        </div>

        {/* Text content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              background: "linear-gradient(90deg, #ec4899, #14b8a6)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: "16px",
            }}
          >
            David Liew
          </div>
          <div
            style={{
              fontSize: "32px",
              color: "#94a3b8",
              marginBottom: "24px",
            }}
          >
            AI Solutions Architect
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#64748b",
              maxWidth: "500px",
            }}
          >
            Building AI colleagues, not AI tools.
          </div>
        </div>
      </div>

      {/* URL at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          fontSize: "20px",
          color: "#475569",
        }}
      >
        daveliew.com
      </div>
    </div>,
    {
      ...size,
    },
  );
}
