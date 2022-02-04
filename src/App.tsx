import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, Location } from "./pages";
import Consult from "./pages/Consult";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/location" element={<Location />} />
          <Route path="/consult" element={<Consult />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
