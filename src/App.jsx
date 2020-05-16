import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Background from './components/Background';
import Contact from './views/Contact';
import Header from './components/Header';

const useStyles = makeStyles({
    main: {
        background: '#FFF',
        position: 'relative',
        zIndex: 3,
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    }
});

const App = () => {
    const classes = useStyles();
    return (
        <div>
            <Background />
            <div className={classes.main}>
                <Contact />
            </div>
        </div>
    );
}

export default App;