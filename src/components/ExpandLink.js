import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ExpansionPanelSummary,
  ExpansionPanel,
  ExpansionPanelDetails,
  List,
  ListItem,
  Button,
  Box,
  ListItemText
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ScrollIntoView from "react-scroll-into-view";

const useStyles = makeStyles(() => ({
  expansionColor: {
    backgroundColor: "#F5F5F5",
    border: "none"
  },
  list: {
    width: "100%"
  },
  button: {
    marginLeft: 5
  }
}));

const ExpandLink = () => {
  const classes = useStyles();

  const [expandHandel, setExpandHandel] = useState(false);

  return (
    <div>
      <ExpansionPanel
        expanded={expandHandel}
        onClick={() => setExpandHandel(!expandHandel)}
        dense="true"
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon color="primary" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.expansionColor}
        >
          <Box textAlign="left">
            <Button
              variant="outlined"
              href="tel:1-503-644-2050"
              color="primary"
              size="small"
              className={classes.button}
            >
              (503) 644-2050
            </Button>

            <Button
              href="https://depbeautybar.setmore.com/bookappointment"
              target="_blank"
              variant="outlined"
              color="secondary"
              size="small"
              className={classes.button}
            >
              BOOK ONLINE
            </Button>
          </Box>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List
            component="nav"
            className={classes.list}
            aria-label="main mailbox folders"
            disablePadding={true}
          >
            <ScrollIntoView selector="#about">
              <ListItem button onClick={() => setExpandHandel(false)}>
                <ListItemText primary="ABOUT" />
              </ListItem>
            </ScrollIntoView>
            <ScrollIntoView selector="#gallery">
              <ListItem button onClick={() => setExpandHandel(false)}>
                <ListItemText primary="GALLERY" />
              </ListItem>
            </ScrollIntoView>
            <ScrollIntoView selector="#services">
              <ListItem button onClick={() => setExpandHandel(false)}>
                <ListItemText primary="SERVICES" />
              </ListItem>
            </ScrollIntoView>
            <ScrollIntoView selector="#contact">
              <ListItem button onClick={() => setExpandHandel(false)}>
                <ListItemText primary="CONTACT" />
              </ListItem>
            </ScrollIntoView>
            <ScrollIntoView selector="#booking">
              <ListItem button onClick={() => setExpandHandel(false)}>
                <ListItemText primary="BOOKING" />
              </ListItem>
            </ScrollIntoView>
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default ExpandLink;
