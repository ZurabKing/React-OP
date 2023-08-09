import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import "./main-layout.scss";

export const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <div>
        <Navbar />
      </div>
      <div className="header-children">
        <Header schoolNumber="Школа 15" schoolStatus="Модератор" />
        <div className="child-container">
        {children}
        </div> 
      </div>
    </div>
  );
};
