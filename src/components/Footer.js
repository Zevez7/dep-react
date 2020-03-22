import React from "react";
import { Box, Typography, Grid } from "@material-ui/core";

const Footer = () => {
  return (
    <Box bgcolor="black" color="white" p={3}>
      <Grid container justify="center">
        <Grid item>
          <Box p={3}>
            <Typography variant="h5">Book your appointment today!</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box p={3}>
            <Typography variant="h5">Phone: (503) 644-2050</Typography>
          </Box>
        </Grid>

        <Grid item>
          <Box p={3}>
            <Typography variant="h5">Dep Beauty Bar</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
