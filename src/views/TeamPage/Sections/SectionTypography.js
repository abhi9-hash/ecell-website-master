import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js"

import image from "assets/img/faces/img18shaan.jpg";
import image1 from "assets/img/faces/img18a.jpg";
import image2 from "assets/img/faces/img18b.jpg";
import image3 from "assets/img/faces/img18c.jpg";
import image4 from "assets/img/faces/img18d.jpg";
import image5 from "assets/img/faces/img18e.jpg";
import image6 from "assets/img/faces/img18f.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";


//variable to store user data that could be traversed using a map to avoid repetition of elements
const sakrock=[
  {name:"Priyansh Rastogi",uimage:image1,linkedin:"https://www.linkedin.com/in/priyansh-rastogi-a350a9174",facebook:"https://www.facebook.com/priyansh.rastogi.71",github:"https://github.com/github2k20"},
  {name:"Pathange Balaji Rao",uimage:image2,linkedin:"https://LinkedIn.com/in/balajiraop",facebook:"https://www.facebook.com/profile.php?id=100008573195988",github:"https://github.com/BALAJIRAO676"},
  {name:"Saket Shrivastava",uimage:image3,linkedin:"https://www.linkedin.com/in/sakrock/",facebook:"https://www.facebook.com/saket.shrivastava.334839/",github:"https://github.com/sakrock"},
  {name:"Hritik Pihal",uimage:image4,linkedin:"https://www.linkedin.com/in/hritik-pihal-570447190",facebook:"https://www.facebook.com/hritikpihal",github:"https://www.github.com/Hrit99"},
  {name:"Raparthi Sai Madhuri",uimage:image5,linkedin:"https://www.linkedin.com/in/raparthi-madhuri/",facebook:"https://www.facebook.com/rsmadhuri2000",github:"https://github.com/madhuri-raparthi"},
  {name:"Vivek Kamboj",uimage:image6,linkedin:"https://www.linkedin.com/in/vivek-kamboj-603682183/",facebook:"https://www.facebook.com/vivek.kamboj.9212301",github:"https://github.com/Vivek-Kamboj"}
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

          <GridItem xs={12} sm={4}  align="center">
              <img
                src={image}
                alt="Shaan Sir"
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <h4> Shaan Mahto</h4>
              <h4  style={{fontWeight:"bold"}}>President</h4>
              <Button
                    color="transparent"
                    href="https://www.linkedin.com/in/shaan-mahato-716b75109/"
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
                    href="https://www.facebook.com/Shaan0341"
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

              {/* <Button
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
                        " fab fa-twitter" 
                      }
                    />
              </Button> */}
              
              <div className={classes.space50} />

            </GridItem>           

            
          </GridContainer>
          <GridContainer>
            

          {sakrock.map((sakky) => (
  <GridItem xs={12} sm={4} className={classes.marginLeft} align="center">
              <img
                src={sakky.uimage}
                alt={sakky.name}
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












