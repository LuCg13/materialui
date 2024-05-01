import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function CardComp() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Example Card
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac turpis eu eros accumsan fringilla. Ut tincidunt, turpis vitae blandit
          vestibulum, nulla diam faucibus est, nec faucibus nulla risus nec neque. Sed euismod sem eget est feugiat, sit amet lacinia velit interdum.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardComp;
