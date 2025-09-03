import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <div className="min-h-[calc(100vh-300px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Analytics />
      <SpeedInsights />
    </>
  );
};

export default MainLayout;
