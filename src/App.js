import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Gallery from "./components/Gallery";
import About from "./components/About";
import { Box } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(() => ({
  app: {
    marginTop: "0.4rem"
  },
  space: {
    height: "2rem"
  },
  offsetMd: {
    position: "relative",
    top: -80,
    height: 1
  },
  offsetSm: {
    position: "relative",
    top: -130,
    height: 1
  }
}));

function App() {
  const classes = useStyles();

  const theme = useTheme();
  const md_up = useMediaQuery(theme.breakpoints.up("md"));

  let screenSizeOffsSet = () => {
    if (md_up) {
      return classes.offsetMd;
    } else {
      return classes.offsetSm;
    }
  };

  return (
    <>
      <div id="hero" />
      <Nav />
      <div className={classes.app} />
      <Hero />
      <div className={classes.space} />
      <Box id="about" className={screenSizeOffsSet()} />
      <About />
      <div className={classes.space} />
      <Box id="gallery" className={screenSizeOffsSet()} />
      <Gallery />
      <div className={classes.space} />
      <Box id="services" className={screenSizeOffsSet()} />
      <Service />
      <div className={classes.space} />
      <Box id="contact" className={screenSizeOffsSet()} />
      <Contact />
    </>
  );
}

export default App;
