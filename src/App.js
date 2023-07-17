import WorldGame from "./pages/WorldGame";
import ImageGallery from "./pages/Images";
import "./fonts/font.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Main from "./pages/Main";
import Training from "./pages/Training";

function App() {
  document.body.style.backgroundColor = "#FCF6F3";
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Guess" element={<WorldGame />} />
        <Route path="/Training" element={<Training />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
