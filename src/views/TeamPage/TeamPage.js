import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
/* // react components for routing our app without refresh
import { Link } from "react-router-dom"; */
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";

// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import SectionPills from "./Sections/SectionPills.js";


import styles from "assets/jss/material-kit-react/views/components.js";


const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  /* const { ...rest } = props; */
  return (
    <div>
      <Header 
        brand={<img src={require("assets/img/ecelllogo.png")} width={"50"} height={"50"} alt="Ecell-logo"/>} 
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
      />
      

       <div className={classNames(classes.main)}>
          <SectionPills />
       </div>      
      <Footer />
    </div>
  );
}
