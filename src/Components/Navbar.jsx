import React from 'react';
import { AppBar, Toolbar, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography} from "@material-ui/core";

const useStyles = makeStyles({
    root:{
        backgroundColor: '#3472DB',
    }
});

const Navbar = () => {
   const classes = useStyles();
    return (
       <Paper>
           <AppBar className={classes.root}>
               <Toolbar variant="dense" className={classes.root}>
                <Typography style={{ color: 'white'}}>
                    Mobile Code
                </Typography>
               </Toolbar>
           </AppBar>
       </Paper>
    );
}

export default Navbar;