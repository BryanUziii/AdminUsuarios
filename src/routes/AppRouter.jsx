import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import MostrarUsuarios from "../pages/MostrarUsuarios";
import GestionarUsuarios from "../pages/GestionarUsuarios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "/",
        element: <MostrarUsuarios />,
      },
      {
        path: "/usuario",
        element: <GestionarUsuarios />,
      },
      {
        path: "/usuario/:id",
        element: <GestionarUsuarios />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
