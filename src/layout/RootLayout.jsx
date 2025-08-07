import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default RootLayout;
