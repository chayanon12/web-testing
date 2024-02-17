import React, { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./assets/Page/FirstPage"
import Homepage1 from "./assets/Page/secodePage"
import FinishPage from "./assets/Page/finishPage"
const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/secodePage" element={<Homepage1/>} />
          <Route path="/finishPage" element={<FinishPage/>} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);

export default App;
