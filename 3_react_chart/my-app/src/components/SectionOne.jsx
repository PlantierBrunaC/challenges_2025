import Box from "./Box";

export default function SectionOne() {
  return (
    <div className="gridMain">
      <div className="col">
        <Box label="Hero" bg="#cbb8e5" h={120} />
        <Box label="Sidebar" bg="#a5cf88" h={120} />
      </div>

      <div className="col">
        <Box label="Main Content" bg="#f1b735" h={180} />
        <Box label="Extra Content" bg="#9a9a9a" h={60} />
      </div>
    </div>
  );
}
