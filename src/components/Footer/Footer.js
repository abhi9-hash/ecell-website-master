import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

import image from "assets/img/ecelllogo.png";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.description} style={{backgroundColor:"black"}}>
      <GridContainer style={{alignItems:"center"}} className={classes.section1}>
        <GridItem xs={12} sm={12} md={12}>
          <h3 className={classes.title} style={{color:"white"}}><img src={image} alt="ecelllogo"  style={{maxWidth:"5%"}}></img>ENTREPRENEURSHIP CELL</h3>
          <h5 className={classes.description} style={{fontSize:"2.1vh"}}>
            for Collaborations reach us at ecell@iiitm.ac.in
          </h5>
        </GridItem>
      </GridContainer>
      <div className={classes.section}  style={{color:"white"}}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <ul style={{listStyleType:"none"}}>
              <strong><li>Address:</li></strong>  
              <li>E-Cell, Room No.201</li>
              <li>D-Block 2nd Floor</li>
              <li>ABV-IIITM,Morena link road</li>
              <li>Gwalior - 474015</li>
            </ul>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
           
            <ul style={{listStyleType:"none"}}>
            <strong>Quick Links:</strong>
            <li> Home </li>
            <li> Become CA </li>
            <li> E-Cell Team </li>
            <li>  IIIT Gwalior Site </li>
            </ul>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          
            <ul  style={{listStyleType:"none"}}>
            <strong><li>Contact Us:</li></strong>
              <li>+91-8171594356</li>
              <li>+91-6265104906 </li>
            </ul>
          </GridItem>
        </GridContainer>
      </div>
      <GridContainer className={classes.section1}>
        <GridItem xs={12} sm={12} md={12}>
          <h4 className={classes.title}>FOLLOW US</h4>
          
                <Button
                  justIcon
                  color="transparent"
                  href="https://in.linkedin.com/company/e-cell-iiit-gwalior"
                  target="_blank"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  href="https://www.youtube.com/channel/UCCkglA5XATIP3pUr6QSHJcw"
                  target="_blank"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-youtube"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  href="https://www.instagram.com/ecell_iiitm/"
                  target="_blank"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  href="https://www.facebook.com/ecell.iiitmG"
                  target="_blank"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              
        </GridItem>
        </GridContainer>

    </div>
  );
}