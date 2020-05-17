import React from 'react';
import Container from '../components/Container';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import AppleLogo from '../images/apple-logo.png';
import AndroidLogo from '../images/anroid-logo.png';
import ReactLogo from '../images/react-logo.png';
import InfoContainer from "../components/InfoContainer";
import App from "../App";

const useStyles = makeStyles({
    section: {
        padding: '70px 0',
    },
    gridItem: {
        position: 'relative',
        width: '100%',
        minHeight: '15px',
        paddingLeft: '15px',
        paddingRight: '15px',
        flexBasis: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    title: {
        fontWeight: 500,
        margin: '1.75 rem 0 0.875rem',
        color: '#3472DB',
        textAlign: 'center',
        marginTop: '20px',
        marginBottom: '20px'
    },
    description: {
        color: '#999',
        textAlign: 'center'
    },
});

const Services = () => {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <Container justify="center">
                <Typography variant="h2" className={classes.title}>
                    Services We Offer
                </Typography>
                <Typography variant="h5" className={classes.description}>
                    We develop mobile applications which meet our customer's vision.
                </Typography>
                <Grid item className={classes.gridItem} cs={12} sm={12} md={8}>
                    <Container >
                        <Grid item className={classes.gridItem} cs={12} sm={12} md={4} style={{ marginTop: '20px' }}>
                            <Grid item xs={12} sm={12} md={4} style={{ padding: '10px 10px 10px 10px'}}>
                                <InfoContainer
                                    imgSource={AppleLogo}
                                    description="We make use of Swift to develop top-notch iOS application. :w"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} style={{ padding: '10px 10px 10px 10px', marginTop: '20px'}}>
                                <InfoContainer
                                    imgSource={AndroidLogo}
                                    description="Though Java is old school we develop Android application implementing the latest designs."
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} style={{ padding: '10px 10px 10px 10px', marginTop: '20px'}}>
                                <InfoContainer
                                    imgSource={ReactLogo}
                                    description="Cross-platform applications so you don't need two different code bases and the app will look alike on all platforms."
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Container>
        </div>
    );
}

export default Services;