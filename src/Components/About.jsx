import React from "react";
import { Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import AboutContent from './AboutContent'
import { makeStyles, Typography, Grid } from "@material-ui/core";
import AboutGraph from "./AboutGraph";
import AboutQuote from "./AboutQuote";

const useStyles = makeStyles({
  about: {
    position: "relative",
    zIndex: "3",
    backgroundColor: "#FEF9EE",
  },
  header:{
  },
  underline:{
    position:"relative",
    top:-35,
    marginBottom:-10,
    backgroundColor:"#00C9A9",
    border: "none",
    height:"2px"
  },
  aboutContent:{
    marginTop: "3em"
  },
  fewWords:{
    backgroundColor:"#FEF9EE",
    position:"relative",
    zIndex:1,
    height:"auto",
    transitionTimingFunction: "ease-in-out"
  },
  quote:{
    marginTop:"4em",
    
  },
  skills:{
    padding:"0em 10px",
  }
});

const About = () => {
  const classes = useStyles();

  const skills = [
    {
      id:"1",
      name:"ReactJs",
      progress:"75%"
    },
    {
      id:"2",
      name:"HTML-CSS-JS",
      progress:"85%"
    },
    {
      id:"3",
      name:"MongoDB",
      progress:"60%"
    },
    {
      id:"4",
      name:"UI/UX Design",
      progress:"50%"
    },
    

  ]

  return (
    <Grid  xs={12} className={classes.about}>
      <Grid container xs={12} justify="center" align="center">
        <Controller>
          <Scene
            indicators={false}
            reverse={true}
            duration={250}
            offset={-150}
          >
            <Tween
              staggerFrom={{ visibility: "hidden", opacity: 0 }}
              staggerTo={{  visibility: "visible", opacity: 1 }}
              stagger={1}
            >
              <Typography className={classes.header} variant="h1" style={{fontFamily: 'Montserrat', fontWeight:700}}>
                About
              </Typography>
                
              {/* Underline */}
              <Controller>
                <Scene
                  indicators={false}
                  reverse={true}
                  duration={80}
                  offset={-140}
                >
                  <Tween
                    staggerFrom={{ transform: "scale(0)"}}
                    staggerTo={{ transform: "scale(1)" }}
                    stagger={1}
                  >
                    <Typography className={classes.aboutTitle} variant="h2">
                      <hr className={classes.underline}/> 
                    </Typography>
                  </Tween>
                </Scene>
              </Controller>
          
            </Tween>
          </Scene>
        </Controller>
      </Grid>




      <Grid className={classes.aboutContent} container xs={12} alignSelf="center" justify="space-around" alignItems="center">
        <Grid className={classes.fewWords} xs={12} lg={5}>
          <AboutContent/>
        </Grid>
        <Grid className={classes.skills} xs={12} lg={5}>
          {skills.map(skill =>
              <AboutGraph
                name={skill.name}
                progress={skill.progress}
              />
            )}
        </Grid>
      </Grid>

      <Grid container xs={12} justify="center" alignItems="center">
        <section className={classes.quote}>
          <AboutQuote/>
        </section>
      </Grid>

      
    </Grid>
  );
};
export default About;
