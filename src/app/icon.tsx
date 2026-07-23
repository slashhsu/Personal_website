import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#102231",
          color: "#f7f3ec",
          display: "flex",
          fontFamily: "serif",
          fontSize: 25,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-1px",
          width: "100%",
        }}
      >
        HL
      </div>
    ),
    size,
  );
}
