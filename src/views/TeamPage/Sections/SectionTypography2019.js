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
import imagej4 from "assets/img/faces/img19d.jpg";
import imagej5 from "assets/img/faces/img19e.jpg";
import imagej6 from "assets/img/faces/img19f.jpg";
import imagej7 from "assets/img/faces/img19g.jpg";
import imagej8 from "assets/img/faces/img19h.jpg";
import imagej9 from "assets/img/faces/img19i.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";


//variable to store user data that could be traversed using a map to avoid repetition of elements
const sakrock=[
  {name:"Abhinav Pathak",uimage:imagej1,linkedin:"https://www.linkedin.com/in/abhinav-pathak-ab443218b/",facebook:"https://www.facebook.com/abhinav.pathak.3576",github:"https://github.com/abhi9-hash"},
  {name:"Anirudh Gautam",uimage:imagej2,linkedin:"https://www.linkedin.com/in/anirudh-gautam-baa7b9190/",facebook:"https://www.facebook.com/anirudh.gautam.522/",github:"https://github.com/gautamanirudh"},
  {name:"Sriya Chettebhaktula",uimage:imagej3,linkedin:"https://www.linkedin.com/in/sriya-chettebhaktula-2941a5194/",facebook:"https://www.facebook.com/S.sriya.A",github:"https://github.com/SRiYaa"},
  {name:"Rajat Singh",uimage:imagej4,linkedin:"https://www.linkedin.com/in/rajat-singh-50853a194/",facebook:"https://www.facebook.com/people/Rajat-Singh/100010949137111",github:"https://github.com/rajatsinghchauhan"},
  {name:"Shrey Gupta",uimage:imagej5,linkedin:"https://www.linkedin.com/in/gupta-shrey/",facebook:"https://www.facebook.com/shrey.gupta.7547",github:"https://github.com/echo-sg"},
  {name:"Aditi Singh",uimage:imagej6,linkedin:"https://www.linkedin.com/in/aditi-singh-64853b194",facebook:"https://www.facebook.com/curlyhair.glasses.rippedjeans",github:"https://github.com/phoenixfeatherquill"},
  {name:"Krishna prasad samudrala",uimage:imagej7,linkedin:"https://www.linkedin.com/in/krishna-samudrala-6867b2188",facebook:"https://m.facebook.com/profile.php",github:"https://github.com/krishnasamudrala"},
  {name:"Tathagata Paul",uimage:imagej8,linkedin:"https://www.linkedin.com/in/tathagata-paul/",facebook:"https://www.facebook.com/tathagata.paul.3",github:"https://github.com/4molybdenum2"},
  {name:"Aashish Kanesh",uimage:imagej9,linkedin:"https://www.linkedin.com/in/aashish-kanesh-484881159/",facebook:"https://www.facebook.com/ashish.kanesh",github:"https://github.com/Aashish17"}
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