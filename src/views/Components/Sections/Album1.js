import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
/* import Link from '@material-ui/core/Link'; */
import { title } from "assets/jss/material-kit-react.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import Header from "components/Header/Header.js";

import Footer from "components/Footer/Footer.js";


import eveimg1 from "assets/img/eveimg1.jpg";
import eveimg2 from "assets/img/eveimg2.jpg";
import eveimg3 from "assets/img/eveimg3.jpeg"; 
import eveimg4 from "assets/img/eveimg4.jpg";
import eveimg5 from "assets/img/eveimg5.jpg";
import eveimg6 from "assets/img/eveimg6.jpeg";
import eveimg7 from "assets/img/eveimg7.jpeg";
import eveimg8 from "assets/img/eveimg8.jpg";
import eveimg9 from "assets/img/eveimg9.jpg";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  title: {
    ...title,
    textAlign:"center",
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
/* 
const cards = [1, 2, 3, 4, 5];
 */
const cards=[
  {image:eveimg1 ,heading:"E-Talks",details:"The Flagship Event of E-Cell IIIT Gwalior consist of Live Sessions by some of the Eminent Personalities" },
  {image:eveimg2 ,heading:"Online MentorShip Session",details:"Online Sessions to achieve personal growth and chance to learn from the best Expert in the Country" },
  {image:eveimg3 ,heading:"Business Plan Competition",details:"Business Plan competition aims at encouraging ideas that combines technology,vision,and business acumen" },
  {image:eveimg4 ,heading:"Workshops",details:"Discover, Learn and Develop skills that every entrepreneur requires in the Journey" },
  {image:eveimg5 ,heading:"Pseudo Stock Trading",details:"A Dummy Stock Competition to develop trading Skils of the young minds. Master the Stock Markets with our unique event, teaching you the A-Z of the Stock Markets" },
  {image:eveimg6 ,heading:"Business Idea Validation",details:" Got a business idea but unable to complete or implement it?? The best of the industry experts shall join forces together to help you polish your business ideas into actual startups" },
  {image:eveimg7 ,heading:"Startup Internship Fair",details:"An event of opportunities for students to intern in the dynamic startup ecosystem and gain immense exposure in multiple sectors. " },
  {image:eveimg8 ,heading:"Case Studies and Brainstorming Even",details:"An impactful event to help students solve the challenges faced by various businesses and brainstorm all the way to create the next disruptive business models of the future."},
  {image:eveimg9 ,heading:"Student - Alumni Connect",details:"A unique Students - Alumni interaction event where students will get the opportunity to solve all their domain specific queries with our alumni working in the same domain."}
]


export default function Album() {
  const classes = useStyles();
  
  return (
     <div>
     <Header 
        brand={<img src={require("assets/img/ecelllogo.png")} width={"50"} height={"50"} alt="Ecell-logo"/>} 
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
      />

    <React.Fragment>
      <CssBaseline />
      
      <main>
        {/* Hero unit */}
        
        <h2 className={classes.title}>Events</h2>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image= {card.image}
                    title="Image titles"       
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.heading}
                    </Typography>
                    <Typography>
                      {card.details}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small" color="primary">
                      Details
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>

    <Footer/>

    </div>
  );
}

