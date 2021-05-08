import * as React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  Button,
  Hidden,
  Avatar,
  Grid
} from "@material-ui/core";
import {ThemeProvider} from '@material-ui/core/styles'
import { makeStyles } from "@material-ui/core";
import Sidebar from "./Sidebar";
import '../App.css';

const useStyles = makeStyles({
    navbar:{
        borderBottom: "5px solid #00C9A9"
    },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  navbarButton:{
      padding:"1em",
      lineHeight:"2em",
  },
  button:{
    '&:hover':{
      '& hr':{
        transform: 'scale(1)',
        transformOrigin:"left"
      }
    }
  },
  underline:{
    position:"relative",
    top:-10,
    marginBottom:-10,
    color:"#FEF9EE",
    transform:'scaleX(0)',
    transformOrigin:"right",
    transition:"transform 250ms ease-in"
  },
  links:{
    textDecoration: "none",
    color:"#FEF9EE"
  }
});

const Navbar = () => {
  const classes = useStyles();
    
  return (
    <ThemeProvider>
        
        <AppBar position="fixed">
        <Toolbar className={classes.navbar}>
            <Container maxWidth="xl" className={classes.navbarDisplayFlex}>
            <IconButton edge="start" color="inherit" aria-label="home">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
            <Hidden smDown>
                <Grid className={classes.navbarButton} justify="flex-end">
                    <a href="#about" className={classes.links}>
                      <Button className={classes.button} color="secondary">
                        <span style={{ letterSpacing: 5}}>
                        About
                          <hr className={classes.underline}/>
                        </span>
                      </Button>
                    </a>

                    <a href="#work" className={classes.links}>
                      <Button className={classes.button} color="secondary">
                        <span style={{ letterSpacing: 5}}>
                        Work
                          <hr className={classes.underline}/>
                        </span>
                      </Button>
                    </a>

                    <a href="#contact" className={classes.links}>
                      <Button className={classes.button} color="secondary">
                        <span style={{ letterSpacing: 5}}>
                        Contact
                          <hr className={classes.underline}/>
                        </span>
                      </Button>
                    </a>
                </Grid>
            </Hidden>
            <Hidden mdUp>
                <Sidebar />
            </Hidden>
            </Container>
        </Toolbar>
        </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
