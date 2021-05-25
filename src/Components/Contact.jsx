import React from 'react'
import { makeStyles, Typography, Grid } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import CodeIcon from '@material-ui/icons/Code';

const useStyles = makeStyles({
    contact:{
        position: "relative",
        zIndex: "3",
    },
    footer:{
        height:"7em",
        background:"#605F5D",
        borderTop:"5px solid #00C9A9",
        padding:"3em",
        margin:0
    },
    icons:{
        display:"flex",
        justifyContent:"space-around",
        marginTop:"1em"
    },
    links:{
        '&:hover':{
            transform:"scale(1.2)"
        }
    }
  });
  
  const Contact = () => {
    const classes = useStyles();
   
  
    return (
        <div className={classes.contact}>
             <Grid className={classes.footer} xs={12} justify="center" align="center">
                <Grid  justify="center" alignItems="center" xs={12}>  
                    <Typography variant="h4" color="secondary" style={{fontFamily: 'Roboto'}}>
                        Send me a <strong  style={{fontFamily: "'Dancing Script', cursive"}}>HI</strong> on...
                    </Typography>
                </Grid>
                <Grid  justify="center" alignItems="center" xs={10} sm={2} className={classes.icons}>
                    <a href="https://www.linkedin.com/in/jayraj-rathod-325452193/"  rel="noopener noreferrer" target="_blank" className={classes.links}>
                        <LinkedInIcon  fontSize="large" color="secondary"/>
                    </a>

                    <a href="https://github.com/Jayraj-R" target="_blank" rel="noopener noreferrer" className={classes.links}>
                        <GitHubIcon  fontSize="large" color="secondary"/>
                    </a>
                    <a href="mailto:jayrahod5@gmail.com" className={classes.links}>
                        <MailIcon  fontSize="large" color="secondary"/>
                    </a>
                    <a href="https://codesandbox.io/u/Jayraj-R" target="_blank" rel="noopener noreferrer" className={classes.links}>
                        <CodeIcon  fontSize="large" color="secondary"/>
                    </a>
                    <a href="https://codepen.io/jayraj-r" target="_blank" rel="noopener noreferrer" className={classes.links}>
                        <Typography variant="h5" color="secondary">
                            <i class="fab fa-codepen"></i>
                        </Typography>
                    </a>
                </Grid>
            </Grid>
                
                
        </div>
    )
}

export default Contact
