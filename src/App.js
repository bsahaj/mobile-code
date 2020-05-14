import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Paper, AppBar, Toolbar, Typography } from '@material-ui/core';
import Image from './images/M_final 10_1280_720px.png';
import Navbar from "./Components/Navbar";
import Container from './Components/MainContainer';

const useStyles = makeStyles({
    root: {
       minHeight: '100vh',
       height: 'auto',
       display: 'block',
        width: '100%',
        position: 'absolute',
        margin: 0,
        padding: 0,
        alignItems: 'center',
    }
});

function App() {
  const classes = useStyles();
    return (
    <Paper className={classes.root}
        style={{
            backgroundImage: "url(" + Image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
        }}
    >
        <Navbar />
        <Container />
    </Paper>
  );
}

export default App;

// img is 2009px x 1339px
