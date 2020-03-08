import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ExpansionPanelSummary,
  ExpansionPanel,
  ExpansionPanelDetails,
  Typography,
  List,
  ListItem,
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
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.expansionColor}
        >
          <Typography variant="h5">MENU</Typography>
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
                <ListItemText primary="SERVICE" />
              </ListItem>
            </ScrollIntoView>
            <ScrollIntoView selector="#contact">
              <ListItem button onClick={() => setExpandHandel(false)}>
                <ListItemText primary="CONTACT" />
              </ListItem>
            </ScrollIntoView>
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default ExpandLink;
