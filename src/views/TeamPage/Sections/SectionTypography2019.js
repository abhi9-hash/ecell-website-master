import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js"

import imagej1 from "assets/img/faces/img19a.jpg";
import imagej2 from "assets/img/faces/img19b.jpg";
import imagej3 from "assets/img/faces/img19c.jpg";
import imagej4 from "assets/img/faces/img19d.jpeg";
import imagej5 from "assets/img/faces/img19e.jpg";
import imagej6 from "assets/img/faces/img19f.jpeg";
import imagej7 from "assets/img/faces/img19g.jpg";
import imagej8 from "assets/img/faces/img19i.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";


//variable to store user data that could be traversed using a map to avoid repetition of elements
const sakrock=[
  {name:"Abhinav Pathak",uimage:imagej1,linkedin:"https://www.linkedin.com/in/abhinav-pathak-ab443218b/",facebook:"https://www.facebook.com/abhinav.pathak.3576",github:"https://github.com/abhi9-hash"},
  {name:"Anirudh Gautam",uimage:imagej2,linkedin:"https://www.linkedin.com/in/anirudh-gautam-baa7b9190/",facebook:"https://www.facebook.com/anirudh.gautam.522/",github:"https://github.com/gautamanirudh"},
  {name:"Sriya Chettebhaktula",uimage:imagej3,linkedin:"https://www.linkedin.com/in/sriya-chettebhaktula-2941a5194/",facebook:"https://www.facebook.com/S.sriya.A",github:"https://github.com/SRiYaa"},
  {name:"Yash Dhobale",uimage:imagej4,linkedin:"https://www.linkedin.com/in/yash-dhobale-896a21193",facebook:"https://www.facebook.com/yash.dhobale.50",github:" "},
  {name:"Shrey Gupta",uimage:imagej5,linkedin:"https://www.linkedin.com/in/gupta-shrey/",facebook:"https://www.facebook.com/shrey.gupta.7547",github:"https://github.com/echo-sg"},
  {name:"Athul Jood",uimage:imagej6,linkedin:"https://www.linkedin.com/in/athul-jood-979881193/",facebook:" ",github:"https://github.com/athuljood"},
  {name:"Krishna prasad samudrala",uimage:imagej7,linkedin:"https://www.linkedin.com/in/krishna-samudrala-6867b2188",facebook:"https://m.facebook.com/profile.php",github:"https://github.com/krishnasamudrala"},
  {name:"Aashish Kanesh",uimage:imagej8,linkedin:"https://www.linkedin.com/in/aashish-kanesh-484881159/",facebook:"https://www.facebook.com/ashish.kanesh",github:"https://github.com/Aashish17"}
]



const useStyles = makeStyles(styles);

export default function SectionTypography() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <div/>
        <div id="images">
          <GridContainer justify="center">
            

          {sakrock.map((sakky) => (
            <GridItem xs={12} sm={4} className={classes.marginLeft} align="center">
              <img
                src={sakky.uimage}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <h4> {sakky.name} </h4>

              <Button
                    color="transparent"
                    href={sakky.linkedin}
                    className={
                      classes.navLink + " " + classes.socialIconsButton
                    }
                  >
                    <i
                      className={
                        classes.socialIcons +
                        " " +
                        classes.marginRight5 +
                        " fab fa-linkedin" 
                      }
                    />
              </Button>

              <Button
                    color="transparent"
                    href={sakky.facebook}
                    className={
                      classes.navLink + " " + classes.socialIconsButton
                    }
                  >
                    <i
                      className={
                        classes.socialIcons +
                        " " +
                        classes.marginRight5 +
                        " fab fa-facebook" 
                      }
                    />
              </Button>

              <Button
                    color="transparent"
                    href={sakky.github}
                    className={
                      classes.navLink + " " + classes.socialIconsButton
                    }
                  >
                    <i
                      className={
                        classes.socialIcons +
                        " " +
                        classes.marginRight5 +
                        " fab fa-github" 
                      }
                    />
              </Button>
              
              <div className={classes.space50} />
            </GridItem>
))}            

          </GridContainer>
          <GridContainer />
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}