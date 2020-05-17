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
    name: {
        color: '#999',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '15px',


    }
});

const Team = () => {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <Container justify="center">
                <Typography variant="h2" className={classes.title}>
                    Our Team
                </Typography>
                <Typography variant="h5" className={classes.description}>
                   Small but productive.
                </Typography>
                <Grid item className={classes.gridItem} cs={12} sm={12} md={8}>
                    <div style={{ overflow: 'hidden', display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: '50px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '30px'}}>
                            <img src={AppleLogo} atl="logo" />
                            <Typography className={classes.name}>
                                Dude 1
                            </Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
                            <img src={AppleLogo} atl="logo" />
                            <Typography className={classes.name}>
                                Dude 2
                            </Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '20px'}}>
                            <img src={AppleLogo} atl="logo" />
                            <Typography className={classes.name}>
                                Dude 3
                            </Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column'}}>
                            <img src={AppleLogo} atl="logo" />
                            <Typography className={classes.name}>
                                Dude 4
                            </Typography>
                        </div>

                    </div>
                </Grid>
            </Container>
        </div>
    );
}

export default Team;