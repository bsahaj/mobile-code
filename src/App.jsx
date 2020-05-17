import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Background from './components/Background';
import Contact from './views/Contact';
import Services from './views/Services';
import Header from './components/Header';
import Team from './views/Team';

const conatinerFluid = {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%"
};
const container = {
    ...conatinerFluid,
    "@media (min-width: 576px)": {
        maxWidth: "540px"
    },
    "@media (min-width: 768px)": {
        maxWidth: "720px"
    },
    "@media (min-width: 992px)": {
        maxWidth: "960px"
    },
    "@media (min-width: 1200px)": {
        maxWidth: "1140px"
    }
};

const useStyles = makeStyles({
    main: {
        background: '#FFF',
        position: 'relative',
        zIndex: 3,
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    container: {
        zIndex: 12,
        color: '#FFF',
        ...container,
    },
    footer: {
        marginTop: '30px',
        padding: '10px 10px 10px 10px'
    }
});

const App = () => {
    const classes = useStyles();
    return (
        <div>
            <Header />
            <Background />
            <div className={classes.main}>
                <div className={classes.container}>
                    <Services />
                    <Team />
                    <Contact />
                </div>
            </div>
            <div className={classes.footer}>
               &copy; 2020 Mobile Code
            </div>
        </div>
    );
}

export default App;