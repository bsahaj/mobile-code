import React from 'react';
import {Card, CardContent, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
        background: '#fff',
        padding: '10px 10px 10px 10px',
        height: '200px',
        width: '200px',
        marginTop: '45%',
        marginLeft: '20%'
    }
});

const InfoCard = (props) => {
    const { title } = props;
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography>
                    {title}
                </Typography>
            </CardContent>
        </Card>
    )
}

InfoCard.propTypes = {
    title: PropTypes.string
}

export default InfoCard;
