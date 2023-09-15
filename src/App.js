import { Container } from "@material-ui/core";
import React from "react";

import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Container className="main" component="main">
        <Outlet />
      </Container>
    </>
  );
};

export default App;
