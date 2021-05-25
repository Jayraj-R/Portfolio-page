import React from 'react'
import { makeStyles, Typography, Grid } from "@material-ui/core";
import { Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";


const useStyles = makeStyles({
    graph:{
        display:"flex",
        alignItems:"center",
        justifyContent:"left",
        padding:"0em 0em",
    },
    outerBar:{
        position:"relative",
        width:"100%",
        height:"2.2em",
        marginLeft:"0.5em",
    },
    innerBar:{
        position:"absolute",
        background:"#605F5D",
        left:"0px",
        height:"1.4em",
        textAlign:"right",
        padding:"0.4em 1em",
        color:"#FEF9EE",
        borderRadius:"0px 20px 20px 0px",
        
    },
    titles:{
        margin:"0.5em 0em",
    },
    percentage:{
        position:"relative",
        top:-1
    }
  });
  
  const AboutGraph = (props) => {
    const classes = useStyles();
  
    return (
        <div>
             <section className={classes.graph}>
                <Grid className={classes.titles} items xs={3} container justify="center" alignItems="center"> 
                    <Controller>
                        <Scene
                            indicators={false}
                            reverse={true}
                            duration={50}
                            offset={-110}
                        >
                            <Tween
                                staggerFrom={{opacity:0}}
                                staggerTo={{opacity:1}}
                                stagger={1}
                            >
                                <Typography variant="subtitle1" style={{fontFamily: 'Roboto',fontWeight:400,lineHeight:"1.2em"}}>
                                    {props.name}
                                </Typography>
                            </Tween>
                        </Scene>
                    </Controller>
                </Grid>


                <Grid items xs={7}>
                    <Controller>
                        <Scene
                            indicators={false}
                            reverse={true}
                            duration={50}
                            offset={-80}
                        >
                            <Tween
                                staggerFrom={{ transform: "scaleX(0)", transformOrigin:"left"}}
                                staggerTo={{ transform: "scaleX(1)", transformOrigin:"left"}}
                                stagger={1}
                            >
                                <Typography variant="subtitle2" className={classes.outerBar}>
                                    <span className={classes.innerBar} style={{width:props.progress}}>{props.progress}</span>
                                </Typography>
                            </Tween>
                        </Scene>
                    </Controller>
                </Grid>
          </section>
        </div>
    )
}

export default AboutGraph
