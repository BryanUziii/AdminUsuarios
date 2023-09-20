import { IconButton } from "@material-ui/core";

import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import CreateIcon from "@material-ui/icons/Create";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUsuario } from "../features/usuarios/usuariosSlice";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#272c34",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const TablaUsuarios = ({ usuarios }) => {
  const dispatch = useDispatch();

  const handleDelete = (username) => {
    dispatch(deleteUsuario(username));
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Editar</StyledTableCell>
            <StyledTableCell align="right">Username</StyledTableCell>
            <StyledTableCell align="right">First Name</StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
            <StyledTableCell align="right">Eliminar</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usuarios.map((user, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                <Link to={`/usuario/${user.userName}`}>
                  <IconButton aria-label="Edit" title="Editar">
                    <CreateIcon />
                  </IconButton>
                </Link>
              </StyledTableCell>
              <StyledTableCell align="right">{user.userName}</StyledTableCell>
              <StyledTableCell align="right">{user.firstName}</StyledTableCell>
              <StyledTableCell align="right">{user.lastName}</StyledTableCell>
              <StyledTableCell align="right">
                <IconButton
                  aria-label="Delete"
                  title="Eliminar"
                  onClick={() => handleDelete(user.userName)}
                  style={{ color: "red" }}
                >
                  <DeleteForeverIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablaUsuarios;
