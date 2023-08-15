import React from "react";
import { MainLayout } from "../../layouts/main-layout";
import { Outlet } from "react-router-dom";

export const TeacherPage = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};
