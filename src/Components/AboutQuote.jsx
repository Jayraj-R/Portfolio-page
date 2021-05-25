import React from 'react'
import { makeStyles, Typography } from "@material-ui/core";
import { Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import '../App.css'

import Tilt from 'react-vanilla-tilt';

const useStyles = makeStyles({
    root:{
        
        padding: "3em",
    },
    quotes: {
        "&:nth-child(1)":{
            transform:"translate(-150%,-50%)"
        }
    },
    speaker:{
        marginRight:"-3em",
        textAlign:"right"
    }
});

const AboutQuote = () => {
  const classes = useStyles();

    return (

        <Tilt max={35} perspective={50} style={{}}>

            <Controller>
                    <Scene
                        indicators={false}
                        reverse={true}
                        duration={50}
                        offset={-300}
                    >
                        <Tween
                            staggerFrom={{ transform: "scale(0)", opacity:0}}
                            staggerTo={{ transform: "scale(1)", opacity:1}}
                            stagger={1}
                        >
                            
                            <div className={`bubble ${classes.root}`}>

                                <Controller>
                                    <Scene
                                        indicators={false}
                                        reverse={true}
                                        duration={50}
                                        offset={-320}
                                    >
                                        <Tween
                                            staggerFrom={{ transform: "scale(0)", opacity:0}}
                                            staggerTo={{ transform: "scale(1)", opacity:1}}
                                            stagger={1}
                                        >
                                            <Typography variant="h2" style={{fontFamily: "'Dancing Script', cursive",fontSize:"5em"}}>
                                                <q><i> Nice </i></q>
                                            </Typography>
                                        </Tween>
                                    </Scene>
                                </Controller>

                                <Controller>
                                    <Scene
                                        indicators={false}
                                        reverse={true}
                                        duration={40}
                                        offset={-310}
                                    >
                                        <Tween
                                            staggerFrom={{ transform: "scale(0)", opacity:0}}
                                            staggerTo={{ transform: "scale(1)", opacity:1}}
                                            stagger={1}
                                        >
                                            <Typography variant="h5"  className={classes.speaker} style={{fontFamily: 'Roboto', fontWeight:300}}>
                                                - My Mom
                                            </Typography>
                                        </Tween>
                                    </Scene>
                                </Controller>
                            </div>
                        </Tween>
                    </Scene>
                </Controller>

            </Tilt>
    )
}

export default AboutQuote