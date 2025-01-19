import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Test from "./Components/Test";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={<Homepage />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
