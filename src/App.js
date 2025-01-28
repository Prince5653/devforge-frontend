import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Login from "./pages/Login"; 
import Signup from "./pages/SignUp"; 
import RootLayout from "./Layout/RootLayout";

const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
         </Route>
      </Routes>
    </Router>
  );
};

export default App;
