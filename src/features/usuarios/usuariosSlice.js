import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    firstName: "Bryan",
    lastName: "Gonzalez",
    userName: "Bruziii",
    password: "123456",
  },
];

export const usuariosSlice = createSlice({
  name: "usuarios",
  initialState: initialState,
  reducers: {
    addUsuario: (state, action) => {
      state.push(action.payload);
    },
    deleteUsuario: (state, action) => {
      //   console.log(action.payload);
      const userFound = state.find((user) => user.userName === action.payload);

      if (userFound) {
        state.splice(state.indexOf(userFound), 1);
      }
    },
  },
});

export const { addUsuario, deleteUsuario } = usuariosSlice.actions;

export default usuariosSlice.reducer;
