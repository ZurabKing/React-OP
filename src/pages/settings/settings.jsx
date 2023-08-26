import React from "react";
import { MainLayout } from "../../layouts/main-layout";
import { Outlet } from "react-router-dom";
import Settings from "../../components/Settings/Settings";

export const SettingsPage = () => {
  return (
    <MainLayout>
     <Settings />
    </MainLayout>
  );
};
