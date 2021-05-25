import React, { useEffect, useState } from "react";
import { Button, createMuiTheme, Grid, ThemeProvider, Typography } from '@material-ui/core'
import Navbar from "./Navbar";
import MouseResponsive from "./MouseResponsive";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const Layout = () => {
    const theme = createMuiTheme({
        palette:{
            primary:{
                main:"#605F5D"
            },
            secondary:{
                main:"#FEF9EE"
            },
            error:{
                main:"#ffffff"
            }
        }
    });

    let curveValue = 350;
    const [curve, setCurve] = useState(curveValue);
    const defaultValue = 350;
    const curveRate = 3;
    let ticking = false;

    useEffect(() => {
        const scrollEvent = (scrollPos) => {
        if (scrollPos >= 0 && scrollPos < defaultValue) {
            curveValue = defaultValue - parseFloat(scrollPos / curveRate);
            setCurve(curveValue);
        }
        };

        window.addEventListener("scroll", function () {
        let last_pos = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function () {
            scrollEvent(last_pos);
            ticking = false;
            });
        }

        ticking = true;
        });
    });

    return (
        <ThemeProvider theme={theme}>
            <Grid container xs={12} className="root">
                {/* Navbar */}
                <Navbar/>


                {/* curve svg */}
                <div xs={12} container className="mobile-curve"><a name="start"/></div>
                <Grid container className="layout" xs={12}>
                    <Grid item xs={12}>
                    <div className="svg-container">
                        <svg className="bg-svg" viewBox="0 -30 800 600" className="svg" > 
                                    <path
                            id="curve"
                            fill="#605F5D"
                            d={`M 800 300 Q 400 ${curve} 0 300 L 0 0 L 800 0 L 800 300 Z`}
                        />
                        </svg>
                    </div>
                    </Grid>
                </Grid>

                
                {/* star background */} 
                
                <Grid xs={12} container className="star-background">
                    <MouseResponsive/>
                </Grid>
                        
                {/* Intro name and picture */}
                <Grid className="introText" container xs={12} direction="row" justify="center" alignItems="center">
                    <Grid item xs={10} sm={6} container direction="row" justify="center" alignItems="center">
                        <Grid xs={12} container direction="row" justify="center" alignItems="center"> 
                            <Typography variant="h1"  color="error" style={{fontFamily: 'Montserrat', fontWeight:700}}>
                                Jayraj Rathod
                            </Typography>
                        </Grid>
                        <Grid xs={12} container direction="row" justify="center" alignItems="center">  
                            <Typography variant="h2"  color="error" style={{fontFamily: "'Dancing Script', cursive"}} gutterBottom>
                                Frontend Developer
                            </Typography>
                        </Grid>
                            
                        <Grid xs={12} container direction="row" justify="center" alignItems="center">
                            <Typography variant="h5"  color="error" className="download-btn " >
                                <a href='../resumeJayrajRathod.docx' download>
                                    <Button style={{fontFamily: 'Montserrat', fontWeight:700}} variant="outlined" color="secondary" endIcon={<ArrowDownwardIcon/>}>
                                        Resume
                                    </Button>
                                </a>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>


                {/* About Section */}
                <Grid container xs={12} className="topSpace"/>
                <Grid container xs={12} className="anchor"><a name="about"/></Grid>
                <Grid xs={12}>
                    <About className="about"/>
                </Grid>


                {/* Work Section */}
                <Grid container xs={12} className="anchor"><a name="work"/></Grid>
                <Grid xs={12}>
                    <Work className="work"/>
                </Grid>
                

                <Grid container xs={12} className="anchor"><a name="contact"/></Grid>
                <Grid xs={12}>
                    <Contact className="contact"/>
                </Grid>
                
            </Grid>

                {/* about work social media center */}
        </ThemeProvider>
    )
}

export default Layout
