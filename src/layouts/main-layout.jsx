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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          backgroundColor: "#000",
        }}
      >
        <div className="header-children">
          <Header schoolNumber="Школа 15" schoolStatus="Модератор" />
        </div>
        <div className="child-container">
          <div className="child-block">{children}</div>
        </div>
      </div>
    </div>
  );
};
