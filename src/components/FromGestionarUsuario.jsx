import { useEffect, useState, useId } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addUsuario, editUsuario } from "../features/usuarios/usuariosSlice";

import "../styles/FromAgregarUsuario.css";

const FromAgregarUsuario = () => {
  const allUsers = useSelector((state) => state.usuarios);
  const newId = useId();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params = useParams();

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

    //validar si ya existe el nombre de usuario
    const userFound = allUsers.find((user) => user.userName == userName);

    if (userFound) {
      //si encuentra un usuario con ese id verifica que no sea el del usuario que se esta editando
      if (params.id !== userFound.id) {
        console.log("id coincide");
        return setErrorDatos({
          userNameExistenteError: true,
        });
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
      dispatch(editUsuario(datosUsuario));
    } else {
      dispatch(
        addUsuario({
          id: newId,
          firstName: firstName,
          lastName: lastName,
          userName: userName,
          password: password,
        })
      );
    }

    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setDatosUsuario(allUsers.find((user) => user.id === params.id));
    }
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
