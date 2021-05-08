import React, { useEffect, useState } from "react";
import { createMuiTheme, Grid, ThemeProvider, Typography } from '@material-ui/core'
import Navbar from "./Navbar";
import MouseResponsive from "./MouseResponsive";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";


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
            
            {/* Navbar */}
            <Navbar/>


            {/* curve svg */}
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
            <Grid container className="star-background">
                <MouseResponsive/>
            </Grid>
                    
            {/* Intro name and picture */}
            <Grid className="introText" container xs={12} direction="row" justify="center" alignItems="center">
                <Grid item xs={10} sm={6}>
                    <Typography variant="h1"  color="error">
                        Jayraj Rathod
                    </Typography>
                    <Typography variant="h2"  color="error">
                        Frontend Developer
                    </Typography>
                </Grid>
            </Grid>


            {/* About Section */}
            <Grid container xs={12} className="topSpace"/>
            <Grid container xs={12} className="anchor"><a name="about"/></Grid>
            <About className="about"/>


            {/* Work Section */}
            <Grid container xs={12} className="anchor"><a name="work"/></Grid>
            <Work className="work"/>

            <Grid container xs={12} className="anchor"><a name="contact"/></Grid>
            <Contact className="contact"/>

                {/* about work social media center */}
        </ThemeProvider>
    )
}

export default Layout
