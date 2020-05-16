import React from 'react';
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    appbar: {
        background: ''
    },
    toolbar: {

    },

});

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appbar}>
            <Toolbar>
                Mobile Code
            </Toolbar>
        </AppBar>
    );
}

export default Header;