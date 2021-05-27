import * as React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  Button,
  Hidden,
  Grid,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Sidebar from "./Sidebar";
import '../App.css';

const useStyles = makeStyles({
  navbar:{
    borderBottom: "5px solid #00C9A9",
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
    color:"#FEF9EE",
  },
  logo:{
    position:"relative",
    top:"50%",
    transform:"translateY(-50%)"
  }
});

const Navbar = () => {
  const classes = useStyles();
    
  return (
        
        <AppBar position="fixed">
        <Toolbar className={classes.navbar}>
            <Container maxWidth="xl" className={classes.navbarDisplayFlex}>
            <a  href="#start" className={classes.links}>
              <Typography variant="h3" color="secondary" className={classes.logo}  style={{fontWeight:700}}>
                JR
              </Typography>
            </a>
            <Hidden smDown>
                <Grid className={classes.navbarButton} justify="flex-end">
                    <a href="#about" className={classes.links}>
                      <Button className={classes.button} color="secondary">
                        <Typography variant="subtitle1" style={{ letterSpacing: 3, fontWeight:700,fontSize:"1.3em"}}>
                        About
                          <hr className={classes.underline}/>
                        </Typography>
                      </Button>
                    </a>

                    <a href="#work" className={classes.links}>
                      <Button className={classes.button} color="secondary">
                        <Typography style={{ letterSpacing: 3, fontWeight:700,fontSize:"1.3em"}}>
                        Work
                          <hr className={classes.underline}/>
                        </Typography>
                      </Button>
                    </a>

                    <a href="#contact" className={classes.links}>
                      <Button className={classes.button} color="secondary">
                        <Typography style={{ letterSpacing: 3, fontWeight:700,fontSize:"1.3em"}}>
                        Contact
                          <hr className={classes.underline}/>
                        </Typography>
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
  );
};

export default Navbar;
