import React from "react";
//components
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default Home;
