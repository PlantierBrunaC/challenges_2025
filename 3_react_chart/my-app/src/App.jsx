import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <div className="page">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}
