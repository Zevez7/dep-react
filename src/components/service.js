import React from "react";
import {
  Typography,
  Box,
  Tab,
  Tabs,
  Grid,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import HairData from "../Data/hairData.json";

import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes
} from "@material-ui/core/styles";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  },
  tab: {
    height: 100,
    width: "100%",
    fontWeight: "bold",
    maxWidth: "none"
  },
  header: {
    fontFamily: "Parisienne, cursive",
    fontWeight: "bold"
  },
  price: {
    textAlign: "right"
  },
  title: {
    fontWeight: "bold"
  },
  TabPanel: {
    overflowY: "auto",
    height: 500
  }
}));

const Service = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //****testing
  console.log("HairData", HairData);

  const mapList = () => {
    return HairData.map((item, index) => (
      <>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <List dense>
            <ListItemText
              primary={item.title}
              className={classes.title}
              key={index}
              disableTypography
            />
            {item.type.map((c, i) => (
              <ListItem key={i} dense>
                <ListItemText primary={c.name} />
                <ListItemText
                  primary={`$${c.price} +`}
                  className={classes.price}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </>
    ));
  };

  return (
    <ThemeProvider theme={theme}>
      <Box textAlign="center" p={4}>
        <Typography variant="h1" className={classes.header}>
          Services
        </Typography>
      </Box>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={3} sm={3}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#CE2EA2",
                  width: 5
                }
              }}
            >
              <Tab className={classes.tab} label="HAIR" {...a11yProps(0)} />
              <Tab className={classes.tab} label="NAIL" {...a11yProps(1)} />
              <Tab className={classes.tab} label="SKIN" {...a11yProps(2)} />
              <Tab className={classes.tab} label="WAX" {...a11yProps(3)} />
              <Tab className={classes.tab} label="OTHERS" {...a11yProps(4)} />
            </Tabs>
          </Grid>
          <Grid item xs={9} sm={9}>
            <TabPanel value={value} index={0} className={classes.TabPanel}>
              <Grid container>{mapList()}</Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              NAIL
            </TabPanel>
            <TabPanel value={value} index={2}>
              SKIN
            </TabPanel>
            <TabPanel value={value} index={3}>
              WAX
            </TabPanel>
            <TabPanel value={value} index={4}>
              OTHERS
            </TabPanel>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default Service;
