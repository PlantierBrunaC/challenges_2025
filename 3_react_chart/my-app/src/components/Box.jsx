export default function Box({ label, bg, h, flex }) {
  const style = {
    background: bg,
    color: "#fff",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  };

  if (h) style.height = h;

 
  if (flex) {
    style.flex = `${flex} 1 0`;    
    style.minHeight = 60;          
  }

  return <div style={style}>{label}</div>;
}
