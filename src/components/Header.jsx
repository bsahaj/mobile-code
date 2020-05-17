import React from 'react';
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    appbar: {
        background: 'transparent'
    },
   title: {
        fontFamily: 'monospace',
        color: '#FFF',
       background: '#3472DB',
       padding: '20px 20px 20px'
   }

});

const Header = () => {
    const classes = useStyles();
    return (
        <Typography className={classes.title} variant="h3">
            Mobile Code.
        </Typography>
    );
}

export default Header;