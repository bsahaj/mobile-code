import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
        padding: '0px',
        minWidth: '400px',
        maxWidth: '500px',
    },
    description: {
        color: '#999',
        marginLeft: '20px',
        overflow: 'hidden'
    },
    gridItem: {
        position: 'relative',
        width: '100%',
        minHeight: '1px',
        paddingRight: '15px',
        paddingLeft: '25px',
        flexBasis: 'auto'
    }
});

const InfoContainer = (props) => {
    const classes = useStyles();
    const { description, imgSource } = props;
    return (
        <Grid container className={classes.root} spacing={2}>
           <Grid item xs={6} className={classes.gridItem}>
               <img src={imgSource} atl="device" />
           </Grid>
            <Grid item xs={6} className={classes.gridItem}>
                <Typography className={classes.description}>
                    {description}
                </Typography>
            </Grid>
        </Grid>
    );
}

InfoContainer.propTypes = {
    description: PropTypes.string,
    imgSource: PropTypes.element
}

export default InfoContainer;
