import React from 'react'
import { makeStyles, Typography, Grid } from "@material-ui/core";
import { Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";


const useStyles = makeStyles({
    graph:{
        display:"flex"
    },
    outerBar:{
        position:"relative",
        width:"100%",
        height:"auto",
        background:"white",
        margin:"0em 0em"
    },
    innerBar:{
        position:"absolute",
        background:"#605F5D",
        width:"50%",
        left:"0px",
        height:"1em",
        textAlign:"right",
        padding:"0.3em 1em",
        color:"#FEF9EE",
        borderRadius:"0px 20px 20px 0px"
    },
    titles:{
        margin:"0.5em 0.5em 0.5em 0em"
    }
  });
  
  const AboutGraph = (props) => {
    const classes = useStyles();
  
    return (
        <div>
            <section className={classes.graph}>
                <Grid className={classes.titles} items xs={2}>
                    <Controller>
                        <Scene
                            indicators={true}
                            reverse={true}
                            duration={50}
                            offset={-80}
                        >
                            <Tween
                                staggerFrom={{opacity:0}}
                                staggerTo={{opacity:1}}
                                stagger={1}
                            >
                                <div>
                                    {props.name}
                                </div>
                            </Tween>
                        </Scene>
                    </Controller>
                
                
                
                
                    
                </Grid>
                
                
                
                
                
                <Grid items xs={10}>
                    <Controller>
                        <Scene
                            indicators={true}
                            reverse={true}
                            duration={50}
                            offset={-80}
                        >
                            <Tween
                                staggerFrom={{ transform: "scaleX(0)", transformOrigin:"left"}}
                                staggerTo={{ transform: "scaleX(1)", transformOrigin:"left"}}
                                stagger={1}
                            >
                                <div className={classes.outerBar}>
                                    <span className={classes.innerBar} style={{width:props.progress}}>{props.progress}</span>
                                </div>
                            </Tween>
                        </Scene>
                    </Controller>
                </Grid>
          </section>
        </div>
    )
}

export default AboutGraph
