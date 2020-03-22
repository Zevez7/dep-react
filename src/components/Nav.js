import React from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Fab,
  Box,
  Grid
} from "@material-ui/core";

import DepLogo from "../images/depLogo.png";
import CssBaseline from "@material-ui/core/CssBaseline";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";

import TabLink from "./TabLink";
import ExpandLink from "./ExpandLink";
import ScrollIntoView from "react-scroll-into-view";

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  box: {
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto"
  },
  toolbar: { textAlign: "center", paddingLeft: 0, paddingRight: 0 },
  fab: { backgroundColor: "#CE2EA2", zIndex: 4000 },
  logo: {
    textAlign: "center",
    height: 50,
    cursor: "pointer"
  },
  expand: {
    width: "100%"
  },
  
}));

function ScrollTop(props) {
  const { children, window } = props;

  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 10
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export default function BackToTop(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="default">
        <Toolbar variant="dense" className={classes.toolbar}>
          <Grid container justify="space-evenly" alignItems="center">
            <Grid item sm={12} md={3} lg={2} className={classes.logo}>
              <ScrollIntoView selector="#hero">
                <img src={DepLogo} className={classes.logo} alt="logo" />
              </ScrollIntoView>
            </Grid>
            <Grid item sm={12} md={9} lg={7} className={classes.expand}>
              <Box display={{ xs: "none", sm: "block" }}>
                <TabLink />
              </Box>
              <Box display={{ xs: "block", sm: "none" }}>
                <ExpandLink />
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />

      <ScrollTop {...props}>
        <Fab
          color="primary"
          className={classes.fab}
          size="medium"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
