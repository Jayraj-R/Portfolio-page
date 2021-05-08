import React from 'react'
import { makeStyles, Typography } from "@material-ui/core";
import { Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";

const useStyles = makeStyles({
    quotes: {
        position: "absolute",
        fontSize:"2em",
        "&:nth-child(1)":{
            transform:"translate(-150%,-50%)"
        }
    },
    speaker:{
        position:"relative",
        top:"1em",
        right:"-5em"
    }
});

const AboutQuote = () => {
  const classes = useStyles();

    return (
        <div>

            <Controller>
                <Scene
                    indicators={true}
                    reverse={true}
                    duration={50}
                    offset={-300}
                >
                    <Tween
                        staggerFrom={{ transform: "scale(0)", opacity:0}}
                        staggerTo={{ transform: "scale(1)", opacity:1}}
                        stagger={1}
                    >
                        <Typography variant="h3">
                            <q><cite>Nice</cite></q>
                        </Typography>
                    </Tween>
                </Scene>
            </Controller>

            <Controller>
                <Scene
                    indicators={true}
                    reverse={true}
                    duration={50}
                    offset={-300}
                >
                    <Tween
                        staggerFrom={{ transform: "scale(0)", opacity:0}}
                        staggerTo={{ transform: "scale(1)", opacity:1}}
                        stagger={1}
                    >
                        <Typography variant="subtitle1">
                            <section className={classes.speaker}><i>-My Mom</i></section>
                        </Typography>
                    </Tween>
                </Scene>
            </Controller>
        </div>
    )
}

export default AboutQuote
