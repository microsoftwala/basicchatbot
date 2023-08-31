import React from "react";
import { Route, Routes } from "react-router-dom";
import Page1 from "./components/page1";
import Chatbot from "./components/Chatbot";
import Page3 from "./components/page3";
import "./index.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </div>
  );
}

export default App;
