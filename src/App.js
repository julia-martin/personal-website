import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SimilartPage from "./components/SimilartPage";
import "./App.css";

function App() {
  const [atTop, setAtTop] = useState(true);

  document.addEventListener('scroll', function(e) {
    if (window.scrollY === 0) {
      setAtTop(true);
    } else {
      setAtTop(false);
    }
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage atTop={atTop} />} />
        <Route path="/similart" element={<SimilartPage atTop={atTop} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
