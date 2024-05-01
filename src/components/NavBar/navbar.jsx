import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { makeStyles } from "@emotion/react";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          My App
        </Typography>
        <Button color="inherit">Image List</Button>
        <Button color="inherit">Table</Button>
        <Button color="inherit">Card</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
