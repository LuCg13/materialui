import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

function TableComp() {
  // Dummy data for table
  const rows = [
    { id: 1, name: "John Doe", age: 30, email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", age: 28, email: "jane.smith@example.com" },
    { id: 3, name: "Alice Johnson", age: 35, email: "alice.johnson@example.com" },
    { id: 4, name: "Bob Brown", age: 40, email: "bob.brown@example.com" },
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableComp;
