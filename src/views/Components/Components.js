import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
/* import { Link } from "react-router-dom"; */
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import About from "./Sections/About.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import Album from "./Sections/Album.js";
import WorkSection from "./Sections/WorkSection.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header 
        brand={<img src={require("assets/img/ecelllogo.png")} width={"50"} height={"50"} alt="Ecell-logo"/>} 
        rightLinks={<HeaderLinks/>}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 550,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg4img.jpg")} >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>  
                <h2 className={classes.title} style={{fontSize:"5vw"}}>ENTREPRENEURSHIP CELL </h2>
                <h3 className={classes.brand} style={{fontSize:"3vw"}}>
                  Don't Follow paths, Leave your Trail
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

       <div className={classNames(classes.main)}>
        <About/>
        <Album/>
        <SectionCarousel />
        <WorkSection/>
       </div>     

      <Footer />
    </div>
  );
}
