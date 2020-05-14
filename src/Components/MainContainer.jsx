import React from 'react';
import InfoCard from "./Info";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'transparent',
        width: '600px',
        marginLeft: '30px',
        marginRight: '30px'
    }
});

const Container = () => {
   const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <InfoCard
                title="About Us"
            />
        </Paper>
    );
}

export default Container;