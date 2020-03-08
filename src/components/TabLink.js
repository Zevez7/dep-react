import React from "react";
import { Tabs, Tab } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ScrollIntoView from "react-scroll-into-view";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(() => ({
  tabs: { height: "100%", color: "#000" },
  tab: {
    fontWeight: "bold",
    fontSize: "1rem",
    marginTop: 10,
    padding: 10
  }
}));

export default function TabLink() {
  const classes = useStyles();
  const theme = useTheme();
  const md_up = useMediaQuery(theme.breakpoints.only("sm"));

  return (
    <>
      <Tabs
        centered={md_up}
        value={1}
        TabIndicatorProps={{
          style: {
            height: 0
          }
        }}
        aria-label="tabs"
        className={classes.tabs}
      >
        <ScrollIntoView selector="#about">
          <Tab label="ABOUT" className={classes.tab} />
        </ScrollIntoView>
        <ScrollIntoView selector="#gallery">
          <Tab label="GALLERY" className={classes.tab} />
        </ScrollIntoView>
        <ScrollIntoView selector="#services">
          <Tab label="SERVICES" className={classes.tab} />
        </ScrollIntoView>
        <ScrollIntoView selector="#contact">
          <Tab label="CONTACT" className={classes.tab} />
        </ScrollIntoView>
      </Tabs>
    </>
  );
}
