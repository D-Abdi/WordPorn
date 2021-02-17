import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import classes from './Words.module.css';
import Logo from '../../UI/Logo/Logo';

function Words() {
    return( 
        <div className={classes.WordsDiv}>
            <h3 className={classes.WordsTitle}>Select a language..</h3>
            <Logo />
            <Link to='/words/dutch'><button className={classes.WordsBtn1}>Dutch</button></Link>
            <Link to='/words/english'><button className={classes.WordsBtn2}>English</button></Link>
        </div>
    )
}

export default Words;