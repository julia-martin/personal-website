import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SimilartPage from "./components/SimilartPage";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/similart" element={<SimilartPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
