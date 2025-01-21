import React from "react";
import Header from "../Common/Header";
import { Outlet } from "react-router-dom";


const RootLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />

    </div>
  )

};

export default RootLayout;
