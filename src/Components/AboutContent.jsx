import React from 'react'
import { Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  fewWords:{
    backgroundColor:"#FEF9EE",
    position:"relative",
    zIndex:1,
    height:"auto",
    transitionTimingFunction: "ease-in-out",
    padding:"1.2em"
  }
});

const AboutContent = () => {
  const classes = useStyles();
  

    return (
        <div>
            <Controller>
                <Scene
                    indicators={false}
                    reverse={true}
                    duration={50}
                    offset={-80}
                >
                    <Tween
                        staggerFrom={{ transform: "scale(0)", opacity:0}}
                        staggerTo={{ transform: "scale(1)", opacity:1}}
                        stagger={1}
                    >
                        <Typography className={classes.fewWords}  variant="h6" style={{fontFamily: 'Roboto',fontWeight:400}}>
                            A versatile Front-end Developer enthusiast with intermediate experience of designing, developing, and managing complex/flat websites and their internal framework. Specializes in ReactJs and responsive design.
                        </Typography>
                    </Tween>
                </Scene>
            </Controller>
        </div>
    )
}

export default AboutContent
