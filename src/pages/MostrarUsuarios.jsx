import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import TablaUsuarios from "../components/TablaUsuarios";

const AgregarUsuario = () => {
  const allUsers = useSelector((state) => state.usuarios);
  const navigate = useNavigate();

  const handleAgregarUsuario = () => {
    navigate("/usuario");
  };

  return (
    <>
      <Container
        style={{ display: "grid", placeItems: "center", marginTop: 15 }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleAgregarUsuario}
          style={{ margin: 10 }}
        >
          Agregar Nuevo Usuario
        </Button>

        {allUsers == 0 ? (
          <Typography component="h2" variant="h4">
            No hay datos guardados
          </Typography>
        ) : (
          <TablaUsuarios usuarios={allUsers} />
        )}
      </Container>
    </>
  );
};

export default AgregarUsuario;
