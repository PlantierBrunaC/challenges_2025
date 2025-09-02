import Box from "./Box";

export default function SectionTwo() {
  return (
    <div className="rowFlex">
      <div className="grow">
        <Box label="Related Images" bg="#1fb26e" h={90} />
      </div>
      <div className="sm">
        <Box label="Related Posts" bg="#f3b6c9" h={90} />
      </div>
    </div>
  );
}
