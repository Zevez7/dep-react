import React from "react";
import Iframe from "react-iframe";
import workHours from "../Data/workHours.json";

import {
  Typography,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Link
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes
} from "@material-ui/core/styles";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles(theme => ({
  header: {
    fontFamily: "Parisienne, cursive",
    fontWeight: "bold"
  },
  spacer: {
    height: 300
  },
  subheader: {
    fontWeight: "bold"
  },
  listItem: {
    textAlign: "center"
  },
  address: {
    textAlign: "center"
  },
  iframe: {
    height: 400,
    width: "auto",
    marginTop: 10
  },
  listItemDay: {
    width: 100
  }
}));

const Contact = () => {
  const classes = useStyles();

  const mapWorkHours = workHours.map((item, i) => {
    return (
      <ListItem className={classes.listItem} key={i}>
        <ListItemText primary={`${item.day}`} className={classes.listItemDay} />
        <ListItemText
          primary={`${item.hours}`}
          className={classes.listItemDay}
        />
      </ListItem>
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <Box textAlign="center" p={4}>
        <Typography variant="h2" className={classes.header}>
          Contact
        </Typography>
      </Box>
      <Grid container justify="center">
        <Grid item xs={12} sm={6} lg={4}>
          <Box textAlign="center">
            <Typography variant="h5" className={classes.subheader}>
              PHONE
            </Typography>
          </Box>
          <Box textAlign="center" p={2}>
            <Typography variant="body1">(503) 644-2050</Typography>
          </Box>

          <Box textAlign="center" p={4}>
            <Typography variant="h5" className={classes.subheader}>
              HOURS
            </Typography>
            <List aria-label="hours" dense>
              {mapWorkHours}
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Box textAlign="center">
            <Typography variant="h5" className={classes.subheader}>
              ADDRESS
            </Typography>
            <Box className={classes.address}>
              <Typography variant="h6">Dep Beauty Bar</Typography>
              <Typography variant="body1">12420 SW 1st St</Typography>
              <Typography variant="body1">Beaverton, OR 97005</Typography>
            </Box>
          </Box>
          <Box textAlign="center" p={4}>
            <Typography variant="h5" className={classes.subheader}>
              GOOGLE MAP |{" "}
              <Link
                href="https://goo.gl/maps/QPiUtmRMMr9VbHu58"
                rel="noopener"
                target="_blank"
                underline="none"
              >
                Map Link
              </Link>
            </Typography>
            <Box className={classes.iframe} textAlign="center" boxShadow={2}>
              <Iframe
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.196522132834!2d-122.80676634867724!3d45.48598717899857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950c200384895b%3A0x8c136449c4a22846!2sDep%20Beauty%20Bar!5e0!3m2!1sen!2sus!4v1584045074572!5m2!1sen!2sus"
                width="100%"
                height="100%"
                frameBorder="0"
                styles={{
                  frameborder: "0"
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Contact;
