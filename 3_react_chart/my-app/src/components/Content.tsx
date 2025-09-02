import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

export default function Content() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <SectionOne />
      <SectionTwo />
    </div>
  );
}
