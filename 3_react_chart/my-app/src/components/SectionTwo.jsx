// src/components/SectionTwo.jsx
import Box from "./Box";

export default function SectionTwo() {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <div style={{ flex: 1.6 }}>
        <Box label="Related Images" bg="#2db274" h={70} />
      </div>
      <div style={{ flex: 0.9 }}>
        <Box label="Related Posts" bg="#f3bfd5" h={70} />
      </div>
    </div>
  );
}
