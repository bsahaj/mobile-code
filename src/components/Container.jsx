import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
   grid: {
       marginRight: '-15px',
       marginLeft: '-15px',
       width: 'auto'
   }
});

const Container = (props) => {
    const classes = useStyles();
    const { children, className } = props;
    return (
        <Grid className={classes.grid + " " + className}>
            {children}
        </Grid>
    );
}

Container.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}

export default Container;