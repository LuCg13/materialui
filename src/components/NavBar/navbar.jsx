import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  optionButton: {
    marginLeft: theme.spacing(1),
    textTransform: "none",
    fontWeight: "bold",
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

function NavBar({ onOptionClick }) {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Menu
        </Typography>
        <Button className={classes.optionButton} onClick={() => onOptionClick("ImageList")}>
          Image List
        </Button>
        <Button className={classes.optionButton} onClick={() => onOptionClick("Table")}>
          Table
        </Button>
        <Button className={classes.optionButton} onClick={() => onOptionClick("Card")}>
          Card
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
