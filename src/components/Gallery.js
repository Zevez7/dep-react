import React from "react";
import ImageGallery from "react-image-gallery";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes
} from "@material-ui/core/styles";

// import placeholderimg from "../images/placeholder.png";
// import jessicaFun from "../images/jessicaFun.jpg";
// import image1 from "../images/Photo by Liubov Ilchuk on Unsplash.jpg";
// import image2 from "../images/Photo by Pascal B. on Unsplash.jpg";
// import image3 from "../images/Photo by Sarah Cervantes on Unsplash.jpg";

import p1 from "../images/gallery/hair1.JPG";
import p2 from "../images/gallery/hair2.jpg";
import p3 from "../images/gallery/hair3.png";
import p4 from "../images/gallery/hair4.JPG";
import p5 from "../images/gallery/hair5.jpeg";
import p6 from "../images/gallery/hair6.png";
import p7 from "../images/gallery/hair7.png";
import p8 from "../images/gallery/hair8.png";
import p9 from "../images/gallery/hair9.png";
import p10 from "../images/gallery/hair10.png";
import p11 from "../images/gallery/nail1.png";
import p12 from "../images/gallery/nail2.png";
import p13 from "../images/gallery/eye1.png";
import p14 from "../images/gallery/eye2.png";
import p15 from "../images/gallery/eye3.png";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const imageData = [
  {
    original: `${p1}`
  },
  {
    original: `${p2}`
  },
  {
    original: `${p3}`
  },
  {
    original: `${p4}`
  },
  {
    original: `${p5}`
  },
  {
    original: `${p6}`
  },
  {
    original: `${p7}`
  },
  {
    original: `${p8}`
  },
  {
    original: `${p9}`
  },
  {
    original: `${p10}`
  },
  {
    original: `${p11}`
  },
  {
    original: `${p12}`
  },
  {
    original: `${p13}`
  },
  {
    original: `${p14}`
  },
  {
    original: `${p15}`
  }
];

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: 900,
    marginLeft: "auto",
    marginRight: "auto"
  },
  header: {
    fontFamily: "Parisienne, cursive",
    fontWeight: "bold"
  }
}));

const Gallery = () => {
  const classes = useStyles();

  return (
    <Box p={5}>
      <ThemeProvider theme={theme}>
        <Box textAlign="center" pb={5}>
          <Typography variant="h2" className={classes.header}>
            Gallery
          </Typography>
        </Box>{" "}
        <Box className={classes.container}>
          <ImageGallery
            items={imageData}
            showFullscreenButton={false}
            showPlayButton={false}
            showThumbnails={false}
            showBullets={true}
            showIndex={true}
          />
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default Gallery;
