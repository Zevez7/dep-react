import React from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  Link
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { ReactComponent as YelpSVG } from "../images/yelp-icon.svg";

import Jessica from "../images/aboutImage/jessicaFun.jpg";
import nail from "../images/aboutImage/Photo by Sarah Cervantes on Unsplash.jpg";
import hair from "../images/aboutImage/Photo by kyle smith on Unsplash.jpg";
import skin from "../images/aboutImage/Photo by Noah Buscher on Unsplash.jpg";
import waxing from "../images/aboutImage/Photo by Candice Picard on Unsplash.jpg";
import eyelash from "../images/aboutImage/Photo by Apostolos Vamvouras on Unsplash.jpg";
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
    height: 400,
    border: "6px solid #fff",
    maxWidth: 300
  },
  card: {
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    maxWidth: 300
  },
  mediaService: {
    height: 150,
    width: 150,
    margin: "auto",
    border: "6px solid #fff",
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
  },
  alignCenter: {
    textAlign: "center"
  },
  service: {
    fontFamily: "Parisienne, cursive"
  },
  spacing: {
    height: 50
  }
});

const About = () => {
  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid container justify="space-evenly" alignItems="center">
          <Grid item xs={12} s={12} md={6}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={`${Jessica}`}
                title="hair"
              />
            </Card>
          </Grid>
          <Grid item xs={12} s={12} md={5}>
            <Box textAlign="center" pt={4}>
              <Typography variant="h2" className={classes.header}>
                About
              </Typography>
            </Box>

            <Box textAlign="left" p={3}>
              <Typography variant="h5" className={classes.message}>
                Dep Beauty Bar is a full-service beauty salon right in downtown
                Beaverton, Oregon.
              </Typography>
              <Typography variant="body1">
                With over 20 years of combined experiences, the friendly staffs
                are experts in nail, hair, waxing, eyelashes, and natural beauty
                care. Book your appointments with us today.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box p={2} mt={2} maxWidth={1000} textAlign="center" mx="auto">
          <Grid>
            <Grid container direction="row" justify="center">
              <Grid item xs>
                <CardMedia
                  className={classes.mediaService}
                  image={`${hair}`}
                  title="Hair"
                />

                <Box textAlign="center" p={1}>
                  <Typography variant="h4" className={classes.service}>
                    Hair
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs>
                <CardMedia
                  className={classes.mediaService}
                  image={`${nail}`}
                  title="Nails"
                />
                <Box textAlign="center" p={1}>
                  <Typography variant="h4" className={classes.service}>
                    Nails
                  </Typography>{" "}
                </Box>
              </Grid>
              <Grid item xs>
                <CardMedia
                  className={classes.mediaService}
                  image={`${skin}`}
                  title="Skin"
                />
                <Box textAlign="center" p={1}>
                  <Typography variant="h4" className={classes.service}>
                    Skincare
                  </Typography>{" "}
                </Box>
              </Grid>
              <Grid item xs>
                <CardMedia
                  className={classes.mediaService}
                  image={`${waxing}`}
                  title="Waxing"
                />
                <Box textAlign="center" p={1}>
                  <Typography variant="h4" className={classes.service}>
                    Waxing
                  </Typography>{" "}
                </Box>
              </Grid>

              <Grid item xs>
                <CardMedia
                  className={classes.mediaService}
                  image={`${eyelash}`}
                  title="Eyelash"
                />
                <Box textAlign="center" p={1}>
                  <Typography variant="h4" className={classes.service}>
                    Eyelash
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box bgcolor="#e8e8e8" p={6}>
          <Box textAlign="center" pb={4}>
            <Box pb={4}>
              <Typography variant="h2" className={classes.header}>
                Social Media
              </Typography>
            </Box>

            <Link
              href="https://www.facebook.com/DepBeautyBar/"
              color="inherit"
              rel="noopener"
              target="_blank"
              underline="none"
            >
              <FacebookIcon style={{ color: "#4267B2", fontSize: "5rem" }} />
            </Link>
            <Link
              href="https://www.instagram.com/depbeautybar/"
              color="inherit"
              rel="noopener"
              target="_blank"
              underline="none"
            >
              <InstagramIcon style={{ color: "#833AB4", fontSize: "5rem" }} />
            </Link>
            <Link
              href="https://www.yelp.com/biz/dep-beauty-bar-beaverton"
              color="inherit"
              rel="noopener"
              target="_blank"
              underline="none"
            >
              <YelpSVG
                style={{
                  color: "#833AB4",
                  height: 70,
                  width: 70,
                  marginLeft: 8,
                  paddingBottom: 7
                }}
              />
            </Link>
          </Box>
          <Box mx="auto" maxWidth={600}>
            <Typography variant="h6">
              Connect with Dep Beauty Bar through your favorite social media.
              Check for latest news. Read amazing customer reviews. View more
              pictures.
            </Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default About;
