import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
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
    editUsuario: (state, action) => {
      // console.log(action.payload);
      const { id, firstName, lastName, userName, password } = action.payload;

      const userFound = state.find((user) => user.id === id);

      if (userFound) {
        userFound.firstName = firstName;
        userFound.lastName = lastName;
        userFound.userName = userName;
        userFound.password = password;
      }
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

export const { addUsuario, deleteUsuario, editUsuario } = usuariosSlice.actions;

export default usuariosSlice.reducer;
