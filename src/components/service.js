import React from "react";
import {
  Typography,
  Box,
  Button,
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
import NailData from "../Data/nailsData.json";
import SkinData from "../Data/skinData.json";
import WaxData from "../Data/waxData.json";
import eyelashData from "../Data/eyelashData.json";
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
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    maxWidth: 1000
  },
  alignCenter: {
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "center",
    width: "100%"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  },
  tab: {
    height: 120,
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
    height: 600
  }
}));

const Service = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const hairMapList = HairData.map((item, index) => (
    <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
      <List dense>
        <ListItemText
          primary={item.title}
          className={classes.title}
          disableTypography
        />
        {item.type.map((c, i) => (
          <ListItem key={i} dense>
            <ListItemText primary={c.name} />
            {
              //<ListItemText primary={c.price} className={classes.price} />
            }
          </ListItem>
        ))}
      </List>
    </Grid>
  ));

  const nailMapList = NailData.map((item, index) => (
    <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
      <List dense>
        <ListItemText
          primary={item.title}
          className={classes.title}
          disableTypography
        />
        {item.type.map((c, i) => (
          <ListItem key={i} dense>
            <ListItemText primary={c.name} />
            {
              //<ListItemText primary={c.price} className={classes.price} />
            }
          </ListItem>
        ))}
      </List>
    </Grid>
  ));

  const skinMapList = SkinData.map((item, index) => (
    <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
      <List dense>
        <ListItemText
          primary={item.title}
          className={classes.title}
          disableTypography
        />
        {item.type.map((c, i) => (
          <ListItem key={i} dense>
            <ListItemText primary={c.name} />
            {
              //<ListItemText primary={c.price} className={classes.price} />
            }
          </ListItem>
        ))}
      </List>
    </Grid>
  ));

  const waxMapList = WaxData.map((item, index) => (
    <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
      <List dense>
        <ListItemText
          primary={item.title}
          className={classes.title}
          disableTypography
        />
        {item.type.map((c, i) => (
          <ListItem key={i} dense>
            <ListItemText primary={c.name} />
            {
              //<ListItemText primary={c.price} className={classes.price} />
            }{" "}
          </ListItem>
        ))}
      </List>
    </Grid>
  ));

  const eyelashMapList = eyelashData.map((item, index) => (
    <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
      <List dense>
        <ListItemText
          primary={item.title}
          className={classes.title}
          disableTypography
        />
        {item.type.map((c, i) => (
          <ListItem key={i} dense>
            <ListItemText primary={c.name} />
            {
              //<ListItemText primary={c.price} className={classes.price} />
            }
          </ListItem>
        ))}
      </List>
    </Grid>
  ));
  console.log(eyelashMapList);

  return (
    <ThemeProvider theme={theme}>
      <Box textAlign="center" p={3}>
        <Typography variant="h2" className={classes.header}>
          Services
        </Typography>
      </Box>
      <Box textAlign="center" pb={1}>
        <Button
          href="https://depbeautybar.setmore.com/services"
          target="_blank"
          variant="contained"
          color="primary"
          // size="small"
        >
          VIEW Pricing
        </Button>
      </Box>
      <Box className={classes.alignCenter}>
        <Box className={classes.root} boxShadow={4}>
          <Grid container justify="center">
            <Grid item xs={3} sm={3} md={2} lg={2}>
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
                <Tab className={classes.tab} label="NAILS" {...a11yProps(1)} />
                <Tab className={classes.tab} label="SKIN" {...a11yProps(2)} />
                <Tab className={classes.tab} label="WAXING" {...a11yProps(3)} />
                <Tab
                  className={classes.tab}
                  label="Eyelash"
                  {...a11yProps(4)}
                />
              </Tabs>
            </Grid>
            <Grid item xs={9} sm={9} md={10} lg={10}>
              <TabPanel value={value} index={0} className={classes.TabPanel}>
                <Grid container>{hairMapList}</Grid>
              </TabPanel>
              <TabPanel value={value} index={1} className={classes.TabPanel}>
                <Grid container>{nailMapList}</Grid>
              </TabPanel>
              <TabPanel value={value} index={2} className={classes.TabPanel}>
                <Grid container>{skinMapList}</Grid>
              </TabPanel>
              <TabPanel value={value} index={3} className={classes.TabPanel}>
                <Grid container>{waxMapList}</Grid>
              </TabPanel>
              <TabPanel value={value} index={4} className={classes.TabPanel}>
                <Grid container>{eyelashMapList}</Grid>
              </TabPanel>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Service;
