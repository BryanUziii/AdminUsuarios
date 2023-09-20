import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import "../styles/FromAgregarUsuario.css";

import { useNavigate, useParams } from "react-router-dom";

import { usuarios, getIndexUsuario } from "../data/usuarios";

import { useDispatch, useSelector } from "react-redux";
import { addUsuario, editUsuario } from "../features/usuarios/usuariosSlice";
import { useId } from "react";

const FromAgregarUsuario = () => {
  const allUsers = useSelector((state) => state.usuarios);
  const newId = useId();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params = useParams();

  const [editarUsuario, setEditarUsuario] = useState(false);
  const [datosUsuario, setDatosUsuario] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    password2: "",
  });

  const [errorDatos, setErrorDatos] = useState({
    firstNameError: false,
    lastNameError: false,
    userNameError: false,
    userNameExistenteError: false,
    passwordError: false,
    password2Error: false,
  });

  const { firstName, lastName, userName, password, password2 } = datosUsuario;
  const {
    firstNameError,
    lastNameError,
    userNameError,
    userNameExistenteError,
    passwordError,
    password2Error,
  } = errorDatos;

  const handleOnChange = (e) => {
    // console.log(e.target.value);

    setDatosUsuario({
      ...datosUsuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    setErrorDatos({
      firstNameError: false,
      lastNameError: false,
      userNameError: false,
      userNameExistenteError: false,
      passwordError: false,
      password2Error: false,
    });

    if (userName.trim().length < 4) {
      return setErrorDatos({
        userNameError: true,
      });
    }

    if (password.trim().length < 6) {
      return setErrorDatos({
        passwordError: true,
      });
    }

    if (password !== password2) {
      return setErrorDatos({
        password2Error: true,
      });
    }

    // Entra solo si no se esta editando un usuario existente
    if (!params.id) {
      //validar si ya existe el nombre de usuario
      if (usuarios.length !== 0) {
        let existe = false;

        usuarios.forEach((user) => {
          if (user.userName == userName) {
            existe = true;
          }
        });

        if (existe) {
          return setErrorDatos({
            userNameExistenteError: true,
          });
        }
      }
    }

    const usuarioArray = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      password: password,
    };

    // si esta editando un usuario entra y remplaza los datos si no, solo lo agrega
    if (params.id) {
      console.log("entro aki");
      dispatch(editUsuario(datosUsuario));
      // if (editarUsuario.indice !== -1) {
      //   // Reemplaza el elemento en el índice con los nuevos datos
      //   usuarios[editarUsuario.indice] = {
      //     ...usuarios[editarUsuario.indice],
      //     ...usuarioArray,
      //   };
      // }
    } else {
      dispatch(addUsuario({ ...usuarioArray, id: newId }));
      // usuarios.push(usuarioArray);
    }

    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setDatosUsuario(allUsers.find((user) => user.id === params.id));
    }

    // const indice = getIndexUsuario(params.userName);

    // if (indice !== -1) {
    //   setEditarUsuario({ indice: indice });
    //   setDatosUsuario(usuarios[indice]);
    // }
  }, []);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate(-1)}
        style={{ margin: 10 }}
      >
        Regresar
      </Button>
      <form onSubmit={handleOnSubmit} target="_blank" className="formAgregar">
        <TextField
          error={firstNameError}
          id="firstName"
          name="firstName"
          label="First Name"
          variant="outlined"
          onChange={handleOnChange}
          value={firstName}
          required
        />

        <TextField
          error={lastNameError}
          id="lastName"
          name="lastName"
          label="Last Name"
          variant="outlined"
          onChange={handleOnChange}
          value={lastName}
        />

        <TextField
          error={userNameError || userNameExistenteError}
          id="userName"
          name="userName"
          label="Username"
          variant="outlined"
          onChange={handleOnChange}
          value={userName}
          required
          helperText={
            (userNameError && "Tiene que contenener 4 o mas letras") ||
            (userNameExistenteError && "Ese nombre de usuario ya existe")
          }
        />

        <TextField
          error={passwordError}
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          onChange={handleOnChange}
          value={password}
          required
          helperText={passwordError && "Tiene que contenener 6 o mas letras"}
        />

        <TextField
          error={password2Error}
          id="password2"
          name="password2"
          label="Confirm Password"
          type="password"
          variant="outlined"
          onChange={handleOnChange}
          value={password2}
          required
          helperText={password2Error && "Las contraseñas no coinciden"}
        />

        <Button type="submit" variant="contained" color="secondary">
          Enviar
        </Button>
      </form>
    </>
  );
};

export default FromAgregarUsuario;
