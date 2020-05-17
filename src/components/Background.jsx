import React from 'react';
import MobileCodeImage from '../images/M_final 9_1640_624px.png';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        height: '100vh',
        maxHeight: '1000px',
        overflow: 'hidden',
        position: 'relative',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        margin: "0",
        padding: "0",
        border: "0",
        display: 'flex',
        alignItems: 'center'
    },
    title: {
        color: '#fff',
        fontFamily: "monospace"
    }
});

const Background = () => {
    const classes = useStyles();
    return (
        <div
            className={classes.root}
            style={{
                backgroundImage: "url(" + MobileCodeImage + ")",
            }}
        />
    );
}

export default Background;
