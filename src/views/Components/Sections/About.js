import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
/* import InfoArea from "components/InfoArea/InfoArea.js"; */

import styles from "assets/jss/material-kit-react/views/componentsSections/about.js";

import image from "assets/img/about.png"

const useStyles = makeStyles(styles);

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      

         
      
      <div>
        <GridContainer justify="center" >
          <GridItem xs={12} sm={12} md={4}  style={{justify:"center"}}>
            <img src={image} alt="vectorimg" width="100%"/>
          </GridItem>
          <GridItem xs={11} sm={12} md={5}  >
          <h2 className={classes.title}>Vision</h2>
          <h4 >Entrepreneurship Cell has been established with the intent to develop ecosystem
            across ABV-IIITM with primary objectives such as to develop Entrepreneurial drive among students (by raising awareness,
            motivation and understanding),to train students in the skills they need to set up a business and manage its
            growth,and to develop the Entrepreneurial approach to identify and capitalize opportunities</h4>
            
          </GridItem>
          
        </GridContainer>
      </div>
    </div>
  );
}
