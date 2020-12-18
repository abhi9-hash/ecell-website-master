/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>


      
      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          className={classes.navLink}
        >
         Home
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/events"
          color="transparent"
          className={classes.navLink}
        >
        Events
        </Button>
      </ListItem>
      
      <ListItem className={classes.listItem}>
        <Button
          href="/team"
          color="transparent"
          className={classes.navLink}
        >
        Team
        </Button>
      </ListItem>      
      
    </List>
  );
}
