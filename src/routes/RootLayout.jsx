import React from "react";

import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import DesktopNavbar from "../Components/NavBar";

export default function RootLayout() {
  return (
    <>
      <DesktopNavbar />
      <Outlet />
      <Footer />
    </>
  );
}
