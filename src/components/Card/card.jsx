import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    width: "80%",
    margin: "20px auto", // Margen superior e inferior de 20px y centrado horizontal
  },
}));

function CardComp() {
  const classes = useStyles();

  return (
    <Card className={classes.cardContainer}>
      <CardContent>
        <Typography variant="h5" component="div">
          Card Title
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, eum. Ad eveniet voluptas ipsum nobis delectus officia iste, quam incidunt
          iure voluptatum debitis, tempora nesciunt consequuntur numquam suscipit architecto aspernatur.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardComp;
