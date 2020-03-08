import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Typography, Button } from "@material-ui/core";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import purpleFlower from "../images/placeholder.png";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
  hiddenBox: {
    height: "3.5rem"
  },
  image: {
    width: "100%",
    opacity: 0.8
  },

  boxContainer: {
    textAlign: "center",

    height: "600px",
    overflow: "hidden",
    position: "relative"
  },
  messageContainer: {
    zIndex: 1,
    position: "absolute",
    bottom: "20%",
    right: 10
  },
  messageContainerSm: {
    zIndex: 1,
    position: "absolute",
    bottom: "20%",
    left: 0,
    right: 0,
    margin: "auto"
  },
  boxImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    background: `linear-gradient(to right, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.7) ), url(${purpleFlower})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  callButton: {
    backgroundColor: "green",
    color: "white",
    opacity: 1
  },
  motto: {
    backgroundColor: "rgba(255, 255, 255, 0.0)",
    lineHeight: "normal",
    fontFamily: "Open Sans, sans-serif",
    color: "white",
    textAlign: "center"
  },
  name: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    lineHeight: "normal",
    fontFamily: "Parisienne, cursive",
    color: "#CE2EA2",
    fontWeight: "bold",
    borderRadius: 25
  },
  phoneBox: {
    backgroundColor: "green",
    display: "inline-block",
    marginTop: 20
    // textAlign: "center"
  }
});

// font-family: 'Open Sans', sans-serif;
// font-family: 'Parisienne', cursive;

export default function Hero() {
  const classes = useStyles();

  const theme = useTheme();

  const only_sx = useMediaQuery(theme.breakpoints.only("sx"));

  let screenSizeOffsSet = () => {
    if (only_sx) {
      return classes.messageContainerSm;
    } else {
      return classes.messageContainer;
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          component="span"
          className={classes.hiddenBox}
          display={{ xs: "block", sm: "block", md: "none" }}
        >
          hidden
        </Box>
        <Box className={classes.boxContainer}>
          <Box className={screenSizeOffsSet()}>
            <Box
              className={classes.message}
              // display={{ xs: "none", sm: "block" }}
            >
              <Typography
                variant="h4"
                // component="span"
                className={classes.motto}
              >
                {"\u00A0"} YOUR BEAUTY {"\u00A0"}
                <br />
                {"\u00A0"} IS OUR PROFESSION
                {"\u00A0"} <br />
              </Typography>
              <Typography
                variant="h2"
                // component="span"
                className={classes.name}
              >
                {"\u00A0"} Dep Beauty Bar {"\u00A0"} <br />
              </Typography>
              <Typography
                variant="h5"
                className={classes.motto}
                // component="span"
              >
                {"\u00A0"} BEAVERTON, OREGON
              </Typography>
            </Box>

            <Box className={classes.phoneBox}>
              <Button className={classes.callButton} disableRipple>
                <Typography variant="h4"> Call Now (503)-644-2050 </Typography>
              </Button>
            </Box>
          </Box>
          <Box className={classes.boxImage} />
        </Box>{" "}
      </ThemeProvider>
    </>
  );
}
