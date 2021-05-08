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
    zIndex: "3"
  },
  underline:{
    position:"relative",
    top:-40,
    marginBottom:-10,
    backgroundColor:"red",
    border: "none",
    height:"2px"
  },
  aboutContent:{
    
    padding: "5em 0 2em 0"
  },
  fewWords:{
    backgroundColor:"#FEF9EE",
    position:"relative",
    zIndex:1,
    height:"auto",
    transitionTimingFunction: "ease-in-out"
  },
  quote:{
    margin:"6em 0em",
    
  }
});

const About = () => {
  const classes = useStyles();

  const skills = [
    {
      id:"1",
      name:"ReactJs",
      progress:"65%"
    },
    {
      id:"1",
      name:"HTML-CSS-JS",
      progress:"80%"
    },
    {
      id:"1",
      name:"UI/UX Design",
      progress:"50%"
    },
    {
      id:"4",
      name:"MongoDB",
      progress:"60%"
    },

  ]

  return (
    <div className={classes.about}>
      <Grid container xs={12} justify="center" align="center">
        <Controller>
          <Scene
            indicators={true}
            reverse={true}
            duration={250}
            offset={-150}
          >
            <Tween
              staggerFrom={{ visibility: "hidden", opacity: 0 }}
              staggerTo={{  visibility: "visible", opacity: 1 }}
              stagger={1}
            >
              <Typography  variant="h2" style={{ letterSpacing: 5}}>
                About
              </Typography>
                
              {/* Underline */}
              <Controller>
                <Scene
                  indicators={true}
                  reverse={true}
                  duration={80}
                  offset={-140}
                >
                  <Tween
                    staggerFrom={{ transform: "scale(0)"}}
                    staggerTo={{ transform: "scale(1)" }}
                    stagger={1}
                  >
                    <Typography className={classes.aboutTitle} variant="h2" style={{ letterSpacing: 5}}>
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
        <Grid className={classes.fewWords} xs={12} sm={5}>
          <AboutContent/>
        </Grid>
        <Grid className={classes.skills} xs={12} sm={5}>
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

      
    </div>
  );
};
export default About;
