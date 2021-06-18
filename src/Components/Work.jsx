import React from 'react'
import { Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import WorkProjects from './WorkProjects';
import phc from '../media/phc.jpg'
import weather from '../media/weather.jpg'
import ttt from '../media/ttt.png'
import invoice from '../media/invoice.jpg'
import jaz from '../media/jaz.png'

const useStyles = makeStyles({
    work:{
        position: "relative",
        zIndex: "3",
        backgroundColor: "#FEF9EE",
    },
    underline:{
      position:"relative",
      top:-35,
      marginBottom:-10,
      backgroundColor:"#00C9A9",
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
            caption:"A react application to fetch and display weather information of the required city.",
            src:weather,
            link:"https://jayraj-r.github.io/weather-app/"
        },
        {
            id:3,
            title:"Jazbaat",
            caption:"Official website for a IIIT Jabalpur's college based drama club - Jazbaat.",
            src:jaz,
            link:"https://jayraj-r.github.io/Jazbaat/"
        },
        {
            id:4,
            title:"Invoice Generator",
            caption:"Web application to create, manage and share invoices.",
            src:invoice,
            link:"https://jayraj-r.github.io/Invoice-Generator/"
        },        
        {
            id:5,
            title:"Tic Tac Toe",
            caption:"A single player classic Tic-Tac-Toe game simulation. Make a triplet to win.",
            src:ttt,
            link:"https://jayraj-r.github.io/TicTacToe/"
        },
    ]
  
    return (
        <div className={classes.work}>
            
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
                    <Typography variant="h1" style={{fontFamily: 'Montserrat', fontWeight:700}} >
                        Work
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
