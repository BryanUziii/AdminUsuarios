import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

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
