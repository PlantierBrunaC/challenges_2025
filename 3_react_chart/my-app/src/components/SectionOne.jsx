// src/components/SectionOne.jsx
import Box from "./Box";

export default function SectionOne() {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
        <Box label="Hero" bg="#c6b3d8" h={120} />
        <Box label="Sidebar" bg="#a4ce7a" h={120} />
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
        <Box label="Main Content" bg="#f6bd3a" h={180} />
        <Box label="Extra Content" bg="#8a8a8a" h={80} />
      </div>
    </div>
  );
}
