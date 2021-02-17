import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Word = (props) => {
    const [word, setWord] = useState([]);
    const { id } = props.match.params;

    useEffect(() => {
        Axios.get('http://localhost:3001/word/' + id).then((response) => {
            setWord(response.data)
        })
    },[id])

    return (
        <div>
            <h1>Word</h1>
            <div>
                <p>{word.word}</p>
                <p>{word.definition}</p>
            </div>
        </div>
    )
}

export default Word;