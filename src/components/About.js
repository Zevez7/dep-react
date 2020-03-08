import React from "react";
import { Typography, Box, Grid, Card, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import jessicaFun from "../images/placeholder.png";

import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes
} from "@material-ui/core/styles";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
  header: {
    fontFamily: "Parisienne, cursive",
    fontWeight: "bold"
  },
  message: {
    marginBottom: 10
  },
  media: {
    height: 300,
    borderLeft: "6px solid #6A4392",
    borderBottom: "6px solid #6A4392"
  },
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 300,
    textAlign: "center"
  }
});

const About = () => {
  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid container spacing={1} justify="space-evenly" alignItems="center">
          <Grid item xs={12} s={12} md={6}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={`${jessicaFun}`}
                title="hair"
              />
            </Card>
          </Grid>
          <Grid item xs={12} s={12} md={5} alignItems="center">
            <Box textAlign="center" p={4}>
              <Typography variant="h2" className={classes.header}>
                About
              </Typography>
            </Box>

            <Box textAlign="left" p={3}>
              <Typography variant="h5" className={classes.message}>
                Dep Beauty Bar opened in 2010 with the goal of providing high
                quality full service beauty salon in downtown Beaverton, Oregon.
              </Typography>
              <Typography variant="body1">
                We are experience in hair, nail and natural skin care. With over
                20 years of combined experience, we are able to care for any
                type of cosmetic need big or small.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default About;
