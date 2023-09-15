export const usuarios = [];

//Funcion para buscar usuario mediante su username(id) y devuelve el indice del array
export const getIndexUsuario = (userName) => {
  return usuarios.findIndex((user) => user.userName == userName);
};
