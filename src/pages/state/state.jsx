import React from "react";
import { MainLayout } from "../../layouts/main-layout";
import State from "../../components/State/State";
import { Outlet } from "react-router-dom";

export const StatePage = () => {
  return (
    <MainLayout>
      {/* <State /> */}
      <Outlet />
    </MainLayout>
  );
};
