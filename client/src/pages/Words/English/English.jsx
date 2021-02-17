import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import Logo from '../../../UI/Logo/Logo';
import classes from './English.module.css';

function English() {
    const [wordList, setWordList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/words').then((response) => {
            setWordList(response.data);
        })
    }, [])

    return( 
        <div className={classes.DutchDiv}> 
            <Logo />
            <h1 className={classes.DutchTitle}>English</h1>
                {
                    wordList.map((word, key) => {
                        if(word.language === "English"){
                            return (
                            <div key={key} className={classes.DutchCard}>
                                <p>{word.word}</p>
                                <p>{word.definition}</p>
                            </div>
                        );
                    }
                    })
                }
        </div>
    )
}

export default English;