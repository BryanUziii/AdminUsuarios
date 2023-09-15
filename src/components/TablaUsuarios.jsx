import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
} from "@material-ui/core";

import CreateIcon from "@material-ui/icons/Create";
import { Link } from "react-router-dom";

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
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Editar</StyledTableCell>
            <StyledTableCell align="right">Username</StyledTableCell>
            <StyledTableCell align="right">First Name</StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
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
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablaUsuarios;
