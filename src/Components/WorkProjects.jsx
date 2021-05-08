import React, {useState, useEffect} from 'react'
import { makeStyles, Typography, Button, Icon  } from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";

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
        }
    },
    card:{
        width:"25em",
        height:"15em",
        margin:"20px",
        borderRadius:"20px",
        overflow:"hidden"
    },
    button:{
        position:'absolute',
        top:"60%",
        left:"50%",
        transform:"translateY(-100%) translateX(-50%)",
        '&:hover':{
            background:"#605F5D",   
        }
    },
    links:{
        textDecoration: "none",
        color:"#FEF9EE"
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
                indicators={true}
                reverse={true}
                duration={100}
                offset={-80}
            >
                <Tween
                    staggerFrom={{ transform: "scale(0)"}}
                    staggerTo={{ transform: "scale(1)" }}
                    stagger={1}
                >
                      
                      <div className={classes.card}>
                        <img className={classes.image} src={props.src} />
                        <div className={`${classes.gradient} ${classes.text}`} onMouseEnter={isShownHandler} onMouseLeave={isShownHandler} >
                        <Typography variant="h4" color="secondary" className={classes.title}>
                            {props.title}
                            </Typography>
                            <Typography variant="subtitle1" color="secondary" >
                                {props.caption}
                            </Typography>
                            {
                                isShown && (
                                    <a className={classes.links} href={props.link} target="_blank">
                                        <Button variant="outlined" color="secondary" className={classes.button}>
                                            View project
                                            <ArrowForwardIcon/>
                                        </Button>
                                    </a>
                                )
                            }
                        </div>
                    </div>

                </Tween>
            </Scene>
        </Controller>








        
    )
}

export default WorkProjects
