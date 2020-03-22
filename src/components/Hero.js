import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Typography, Button } from "@material-ui/core";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Skeleton from "@material-ui/lab/Skeleton";

import purpleFlower from "../images/purpleFlower.jpg";

let theme2 = createMuiTheme();
theme2 = responsiveFontSizes(theme2);

const useStyles = makeStyles({
  image: {
    width: "100%",
    opacity: 0.8
  },
  boxContainer: {
    textAlign: "center",
    height: "600px",
    overflow: "hidden",
    position: "relative",
    top: -5
  },
  messageContainer: {
    zIndex: 1,
    position: "absolute",
    bottom: "20%",
    right: 10
  },
  messageContainerSx: {
    zIndex: 1,
    position: "absolute",
    bottom: "20%",
    width: "100%",
    paddingLeft: 35,
    paddingRight: 35
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
    borderRadius: 10
  },
  phoneBox: {
    backgroundColor: "green",
    display: "inline-block",
    marginTop: 20
  },
  nodecor: {
    color: "white"
  }
});

export default function Hero() {
  const classes = useStyles();

  const theme = useTheme();

  const only_xs = useMediaQuery(theme.breakpoints.down("xs"));

  console.log(only_xs);

  let screenSizeOffsSet = () => {
    if (only_xs) {
      return classes.messageContainerSx;
    } else {
      return classes.messageContainer;
    }
  };

  return (
    <>
      <ThemeProvider theme={theme2}>
        <Box className={classes.boxContainer}>
          <Box className={screenSizeOffsSet()}>
            <Box className={classes.message}>
              <Typography variant="h3" className={classes.name}>
                Dep Beauty Bar
              </Typography>
              <Typography variant="h5" className={classes.motto}>
                {"\u00A0"} BEAVERTON, OREGON
              </Typography>
            </Box>
            <Box textAlign="center" my={2}>
              <Button
                href="https://depbeautybar.setmore.com/bookappointment"
                target="_blank"
                variant="contained"
                color="secondary"
                size="large"
              >
                <Typography variant="h5">BOOK ONLINE NOW</Typography>
              </Button>
            </Box>
            <Box textAlign="center">
              <Button variant="contained" color="primary" size="large">
                <a href="tel:1-503-644-2050" className="nodecor white">
                  <Typography variant="h5">CALL (503) 644-2050</Typography>
                </a>
              </Button>
            </Box>
          </Box>
          {purpleFlower ? (
            <Box className={classes.boxImage} />
          ) : (
            <Skeleton variant="rect" width={100} height={100} />
          )}
        </Box>
      </ThemeProvider>
    </>
  );
}
