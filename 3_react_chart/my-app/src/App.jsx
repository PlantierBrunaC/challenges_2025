// src/App.jsx
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f3f4f6",
      padding: 16,
    }}>
      <div style={{ width: 360, display: "flex", flexDirection: "column", gap: 10 }}>
        <Header />
        <Content />
        <Footer />
        
      </div>

    </div>
  );
}
