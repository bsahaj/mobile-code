import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Paper, AppBar, Toolbar } from '@material-ui/core';
import LogoPng from './images/M_final 7_800_800px.png';
import Navbar from "./Components/Navbar";
import Logo from './Components/Logo';

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        background: '#323f54',
        position: 'absolute'
    }
});

function App() {
  const classes = useStyles();
    return (
    <Paper className={classes.root}>
        <div style={{ marginTop: '10px'}}>
            <Navbar />

        </div>

    </Paper>
  );
}

export default App;
