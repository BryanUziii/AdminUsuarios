import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <AppBar className="header">
        <Toolbar>
          <Typography variant="h3" component="h1">
            Admistrador De Usuarios
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
