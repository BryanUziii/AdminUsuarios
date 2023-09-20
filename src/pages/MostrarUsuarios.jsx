import { Button, Container, Typography } from "@material-ui/core";
import React from "react";

import TablaUsuarios from "../components/TablaUsuarios";
import { useNavigate } from "react-router-dom";
// import { usuarios } from "../data/usuarios";
import { useSelector } from "react-redux";

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
