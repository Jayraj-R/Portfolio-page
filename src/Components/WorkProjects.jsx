import React, {useState, useEffect} from 'react'
import { makeStyles, Typography, Button, Paper } from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import Tilt from 'react-vanilla-tilt';

const useStyles = makeStyles({
    image:{
        height:"100%",
        width:"100%",  
        position:"relative",  
    },
    gradient:{
        position:"relative",
        height:"100%",
        backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0, 0,0,0.9))",
        top:"-101%",
        padding:"4em 1em",
        '&:hover':{
            backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0, 0,0,1))",
            '& a':{
                opacity:1
            } 
        },
        "@media only screen and (max-width: 600px)": {
            backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0, 0,0,1))",
      }
    },
    card:{
        background:"#FEF9EE",
        width:"25em",
        height:"15em",
        margin:"20px",
        "@media only screen and (max-width: 600px)": {
            width:"20em",
            height:"18em"
      }
    },
    button:{
        position:'absolute',
        top:"60%",
        left:"50%",
        transform:"translateY(-100%) translateX(-50%)",
        '&:hover':{
            background:"#605F5D",   
        },
        "@media only screen and (max-width: 600px)": {
            width:"15em",
            margin:"1em",
      }
    },
    links:{
        textDecoration: "none",
        color:"#FEF9EE",
        opacity:0,
        "@media only screen and (max-width: 600px)": {
            opacity:1
         }
    },
    tilt:{
        width:"25em",
        height:"15em",
        borderRadius:"20px",
        overflow:"hidden",
        "@media only screen and (max-width: 600px)": {
              width:"20em",
              height:"18em"
        }
    }
  });
  
  const WorkProjects = (props) => {
    const classes = useStyles();
    const [isShown, setIsShown] = useState(false);

    const isShownHandler = () =>{
        setIsShown(!isShown)
    }
    useEffect(() => {
        console.log(window.screen.availWidth)
        if(window.screen.availWidth<1536){
            setIsShown(true)
        }
    },[]);
  
    return (
        
            <Controller>
                <Scene
                    indicators={false}
                    reverse={true}
                    duration={100}
                    offset={-75}
                >
                    <Tween
                        staggerFrom={{ transform: "scale(0)"}}
                        staggerTo={{ transform: "scale(1)" }}
                        stagger={1}
                    >
                        
                            <Paper className={classes.card} elevation={0}>
                                <Tilt max={35} className={classes.tilt} style={{}}>

                                    <img className={classes.image} src={props.src} alt={props.title}/>
                                    <div className={`${classes.gradient} ${classes.text}`}>
                                        <Typography variant="h4" color="secondary" className={classes.title} style={{fontFamily: 'Montserrat', fontWeight:500}} >
                                            {props.title}
                                        </Typography>
                                        <Typography variant="subtitle1" color="secondary" style={{fontFamily: 'Roboto',fontWeight:400,padding:"0em 2em"}}>
                                            {props.caption}
                                        </Typography>
                                        
                                        <a className={classes.links} href={props.link} target="_blank" rel="noopener noreferrer" style={{transition:"opacity 250ms ease-in-out",}}>
                                            <Button variant="outlined" color="secondary" className={classes.button} style={{fontFamily: 'Montserrat', fontWeight:700}}>
                                                View project
                                                <ArrowForwardIcon/>
                                            </Button>
                                        </a>
                                    </div>
                                </Tilt >

                            </Paper>
                    </Tween>
                </Scene>
            </Controller>
        
    )
}

export default WorkProjects
