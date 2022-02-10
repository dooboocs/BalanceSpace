import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, Location } from "./pages";
import Consult from "./pages/Consult";
import Consult2 from "./pages/Consult/Consult2";
import Consult3 from "./pages/Consult/Consult3";
import Consult4 from "./pages/Consult/Consult4";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/location" element={<Location />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/consult2" element={<Consult2 />} />
          <Route path="/consult3" element={<Consult3 />} />
          <Route path="/consult4" element={<Consult4 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
