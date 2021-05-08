import React from 'react'
import { Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import { makeStyles, Typography, Grid, Paper } from "@material-ui/core";
import WorkProjects from './WorkProjects';
import phc from '../media/phc.jpg'
import weather from '../media/weather.jpg'
import ttt from '../media/ttt.png'

const useStyles = makeStyles({
    work:{
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
    flex:{
        display:"flex"
    }
  });
  
  const Work = () => {
    const classes = useStyles();
    const projects = [
        {
            id:1,
            title:"PHC Admin System(Covid-19)",
            caption:"Time slot distributer for checkups.",
            src:phc,
            link:"https://github.com/Jayraj-R/PHC-Administration-Covid-19"
        },
        {
            id:2,
            title:"Weather App",
            caption:"A react based application to fetch and display weather information of the required city.",
            src:weather,
            link:"https://jayraj-r.github.io/weather-app/"
        },
        {
            id:3,
            title:"Tic Tac Toe",
            caption:"A single player classic Tic-Tac-Toe game simulation. Make a triplet to win.",
            src:ttt,
            link:"https://jayraj-r.github.io/TicTacToe/"
        }
    ]
  
    return (
        <div className={classes.work}>
            
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
                        Work
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


            <Grid container xs={12} justify="center" align="center">
                {projects.map(project =>
                    <WorkProjects
                        title={project.title}
                        caption={project.caption}
                        src={project.src}
                        link={project.link}
                    />
                )}
            </Grid>
                


        </div>
    )
}

export default Work
