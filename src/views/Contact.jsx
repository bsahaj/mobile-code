import React from 'react';
import Container from '../components/Container';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles({
    section: {
        padding: '10px 0',
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
    form: {
        padding: '15px 15px 15px 15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    textInput: {
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '20px'
    },
    noteInput: {
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '20px'
    },
    submitButton: {
        width: '60%',
        marginTop: '10px',
        marginLeft: 'auto',
        marginRight: 'auto',
        background: '#3472DB',
        color: '#FFF'
    }
});

const Contact = () => {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <Container justify="center">
                <Grid item className={classes.gridItem} cs={12} sm={12} md={8}>
                    <Typography variant="h2" className={classes.title}>
                        Let's get in touch
                    </Typography>
                    <Typography variant="h5" className={classes.description}>
                        Description
                    </Typography>
                    <form className={classes.form}>
                        <TextField label="Enter your name" className={classes.textInput}/>
                        <TextField label="Email your email" className={classes.textInput}/>
                        <TextField multiline rows={4} label="Leave us a note" className={classes.noteInput}/>
                        <Button className={classes.submitButton}>Submit</Button>
                    </form>
                </Grid>
            </Container>
        </div>
    );
}

export default Contact;