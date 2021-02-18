import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Logo from '../../../UI/Logo/Logo';

import classes from './Dutch.module.css';

function Dutch() {
    const [wordList, setWordList] = useState([]);

    useEffect(() => {
        Axios.get('https://abdi-wordporn.herokuapp.com/words').then((response) => {
            setWordList(response.data);
        })
    }, [])

    return( 
        <div className={classes.DutchDiv}>
            <Logo />
            <h1 className={classes.DutchTitle}>Dutch Words</h1>
                {
                    wordList.map((word, key) => {
                        if(word.language === "Dutch"){
                            return (
                            <div key={key} className={classes.DutchCard}>
                                
                                <p><strong>{word.word}</strong></p>
                                <p>{word.definition}</p>
                    
                            </div>
                        )
                }
                })}
        </div>
    )
}

export default Dutch;