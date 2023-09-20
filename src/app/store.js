import { configureStore } from "@reduxjs/toolkit";
import usuariosReducer from "../features/usuarios/usuariosSlice";

export default configureStore({
  reducer: {
    usuarios: usuariosReducer,
  },
});
