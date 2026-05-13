import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Como funciona um processo trabalhista — TRT 18°";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 60%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#1D4ED8",
            marginBottom: 24,
            letterSpacing: "0.05em",
          }}
        >
          TRT 18° — Tribunal Regional do Trabalho da 18a Regiao
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: "#1F2937",
            lineHeight: 1.2,
            marginBottom: 24,
            maxWidth: 900,
          }}
        >
          Como funciona um processo trabalhista
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#4B5563",
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Fluxogramas, simulacao guiada e glossario em linguagem simples.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 80,
            fontSize: 16,
            color: "#9CA3AF",
          }}
        >
          Material educativo. Nao substitui orientacao juridica.
        </div>
      </div>
    ),
    { ...size }
  );
}
