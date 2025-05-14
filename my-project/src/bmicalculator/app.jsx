// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InputHal from "./inputHal";
import OutputHal from "./outputHal";
import DetailPage from "./detailPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-200 flex items-center justify-center">
        <Routes>
          <Route path="/" element={<InputHal />} />
          <Route path="/output" element={<OutputHal />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;