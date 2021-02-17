import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Home.module.css';

function Home() {
    return(
        <div className={classes.HomeDiv}>
            <h1 className={classes.HomeTitle}>Word Porn.</h1>

            <p>Welcome to the Word Porn app! Here you can add new words to expand your vocabulary.</p>
            <p>Select one of the options below..</p>

            <Link to="/words" ><button className={classes.HomeBtn1}>See Word List</button></Link>
            <Link to="/word/add"><button className={classes.HomeBtn2}>Add New Word</button></Link>
        </div>
    )
};

export default Home;