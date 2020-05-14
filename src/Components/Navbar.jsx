import React from 'react';
import { AppBar, Toolbar, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography} from "@material-ui/core";

const useStyles = makeStyles({
    root:{
        backgroundColor: '#fff',
        zIndex: 10000,
        position: 'absolute',
        marginTop: '10px',
        width: '100%'
    }
});

const Navbar = () => {
   const classes = useStyles();
    return (
       <AppBar>
         <Toolbar variant="dense" className={classes.root}>
           <Typography style={{ color: '#000'}}>
             Mobile Code.
           </Typography>
         </Toolbar>
       </AppBar>
    );
}

export default Navbar;