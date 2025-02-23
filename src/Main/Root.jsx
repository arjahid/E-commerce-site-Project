import React from "react";
import Nav from "../components/Header/Nav";
import { Outlet } from "react-router-dom";
import Carosel from "../components/Header/Carosel";

const Root = () => {
  return (
    <div className="container mx-auto">
      <header className="container mx-auto">
        <Nav></Nav>
        <Carosel></Carosel>
      </header>
      <main></main>
      <Outlet></Outlet>
      <footer></footer>
    </div>
  );
};

export default Root;
