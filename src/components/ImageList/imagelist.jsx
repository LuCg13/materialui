import React from "react";
import { ImageList, ImageListItem, ImageListItemBar, IconButton } from "@mui/material";
import { makeStyles } from "@emotion/react";
import InfoIcon from "@mui/icons-material/Info";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

function ImageListComp() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={250} cols={3} className={classes.imageList}>
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
  );
}

// Dummy data for images
const itemData = [
  {
    img: "/image/image1.jpg",
    title: "Image 1",
  },
  {
    img: "/image/image2.jpg",
    title: "Image 2",
  },
  {
    img: "/image/image3.jpg",
    title: "Image 3",
  },
];

export default ImageListComp;
