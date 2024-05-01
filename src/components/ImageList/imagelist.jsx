import React from "react";
import { useMediaQuery, useTheme, ImageList, ImageListItem, ImageListItemBar, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import InfoIcon from "@mui/icons-material/Info";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "80%", // Ajusta el ancho del contenedor al 80% de la pantalla
    height: "90vh", // Ajusta la altura del contenedor al 90% del alto de la ventana
    overflowY: "auto", // Agrega desplazamiento vertical si es necesario
    margin: "auto", // Centra el contenedor horizontalmente
    marginBottom: theme.spacing(2), // Ajusta el margen inferior según sea necesario
  },
  imageListContainer: {
    width: "80%",
    overflowY: "auto", // Hace que el contenedor tenga scroll si es necesario
    marginBottom: theme.spacing(2), // Ajusta el margen inferior según sea necesario
  },
  imageList: {
    width: "100%", // Hacemos que la lista de imágenes ocupe todo el ancho del contenedor
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  title: {
    marginTop: theme.spacing(2), // Ajusta el margen superior del título según sea necesario
  },
}));

function ImageListComp() {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Detecta si la pantalla es pequeña

  const cols = isSmallScreen ? 1 : 3; // Define el número de columnas según el tamaño de la pantalla

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title} gutterBottom>
        Lista de Imágenes
      </Typography>
      <div className={classes.imageListContainer}>
        <ImageList rowHeight={250} cols={cols} className={classes.imageList}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} />
              <ImageListItemBar
                title={item.title}
                actionIcon={
                  <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}

// Dummy data for images
const itemData = [
  {
    img: "/images/image1.jpg",
    title: "Image 1",
  },
  {
    img: "/images/image2.jpg",
    title: "Image 2",
  },
  {
    img: "/images/image3.jpg",
    title: "Image 3",
  },
  {
    img: "/images/image4.jpg",
    title: "Image 4",
  },
  {
    img: "/images/image5.jpg",
    title: "Image 5",
  },
  {
    img: "/images/image6.jpg",
    title: "Image 6",
  },
];

export default ImageListComp;
