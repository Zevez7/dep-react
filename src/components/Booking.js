import React from "react";
import { Typography, Box, Grid, Button } from "@material-ui/core";
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
  iframe: {
    height: 400,
    width: "auto",
    marginTop: 10
  }
}));

const Booking = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box textAlign="center" p={4}>
        <Typography variant="h2" className={classes.header}>
          Booking
        </Typography>
      </Box>
      <Grid container justify="center">
        <Grid item xs={12} sm={6} lg={4}>
          <Box
            textAlign="center"
            fontWeight="fontWeightBold"
            fontSize="h4.fontSize"
            p={2}
          >
            ONLINE BOOKING
          </Box>
          <Box textAlign="center">
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
          <Box textAlign="left" pt={3} px={3}>
            <Typography variant="body1">
              Online booking is available through our partnership with Setmore.
              This is the best way to schedule and manage your appointments.
            </Typography>
          </Box>
          <Box textAlign="left" fontSize="h6.fontSize" p={3}>
            Online Booking Benefits
            <Typography variant="body1">
              - Faster appointment booking
            </Typography>
            <Typography>
              - Quick changes to appointment after booking
            </Typography>
            <Typography>
              - See estimated pricing and duration for services
            </Typography>
            <Typography>- Add custom message to staff with booking</Typography>
            <Typography>
              - Automated text reminder 1 day before appointment
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Box
            textAlign="center"
            fontWeight="fontWeightBold"
            fontSize="h4.fontSize"
            p={2}
          >
            PHONE BOOKING
          </Box>
          <Box textAlign="center">
            <Button variant="contained" color="primary" size="large">
              <a href="tel:1-503-644-2050" className="nodecor white">
                <Typography variant="h5">CALL (503) 644-2050</Typography>
              </a>
            </Button>
          </Box>
          <Box textAlign="left" pt={3} px={3}>
            <Typography variant="body1">
              Do you need custom booking? Or you want to talk to someone to
              schedule a booking? Please call us during normal business hours.
            </Typography>
          </Box>
          <Box textAlign="left" fontSize="h6.fontSize" p={3}>
            Quick Phone Booking Steps (optional)
            <Typography variant="body1">
              1. Pick out your service through our online booking page.
              <Button
                href="https://depbeautybar.setmore.com/bookappointment"
                target="_blank"
                // variant="contained"
                color="primary"
                size="small"
              >
                Booking Page
              </Button>
            </Typography>
            <Typography>2. Select your preferred staff.</Typography>
            <Typography>
              3. Select your preferred time through the calendar.
            </Typography>
            <Typography>
              {" "}
              4. Call us to schedule your appointment with your selected staff
              and time
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Booking;
