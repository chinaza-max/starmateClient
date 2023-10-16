import "./Tables3.css"
//import Table from "../Table3/Table3"
import React,{useState} from 'react'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




export default function Tables3(props) {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };



  return (

    <div  className="Tables3">

          <Paper className="Tables3Container" sx={{ width: '100%' }}>

            <TableContainer>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Created </StyledTableCell>
                    <StyledTableCell align="left">Expires</StyledTableCell>
                    <StyledTableCell align="left">Title</StyledTableCell>
                    <StyledTableCell align="left">Service</StyledTableCell>
                    <StyledTableCell align="left">Amount</StyledTableCell>
                    <StyledTableCell align="left">Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                
                  {props.dataP
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <StyledTableRow key={row.data1}>
                      <StyledTableCell component="th" scope="row">
                        {row.data1}
                      </StyledTableCell>
                      <StyledTableCell align="left">{row.data2}</StyledTableCell>
                      <StyledTableCell align="left">{row.data3}</StyledTableCell>
                      <StyledTableCell align="left">{row.data4}</StyledTableCell>
                      <StyledTableCell align="left">{row.data5}</StyledTableCell>
                      <StyledTableCell align="left">

                  
                        <Grid container spacing={2} columns={16}>
                          <Grid item xs={8}>
                            
                            <Button variant="contained" size="small">
                              view
                            </Button>
                          </Grid>
                          <Grid item xs={8}>
                              <Button variant="contained" size="small">
                                pay
                              </Button>
                          </Grid>
                        </Grid>
                      
                      </StyledTableCell>
                      
                    </StyledTableRow>
                      );
                    })}

                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={props.dataP.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
          
    </div>

  
  )
}
