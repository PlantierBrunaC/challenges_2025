// src/components/Box.jsx
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

  // modo antigo: altura fixa
  if (h) style.height = h;

  // modo novo: proporcional dentro do container
  if (flex) {
    style.flex = `${flex} 1 0`;    // grow/shrink com base na proporção
    style.minHeight = 60;          // evita ficar muito pequeno em telas estreitas
  }

  return <div style={style}>{label}</div>;
}
