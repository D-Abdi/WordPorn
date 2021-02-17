import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import classes from './AddWord.module.css';
import Logo from '../../../../UI/Logo/Logo';

function AddWord() {
    const [language, setLanguage] = useState('');
    const [word, setWord] = useState('');
    const [definition, setDefinition] = useState('');
  
    const addToList = () => {
      Axios.post('http://localhost:3001/word/create', {language: language, word: word, definition: definition}).then(() => {
        console.log("Succes!");
      })
    }
  
    return (
      <div className={classes.AddDiv}>
        <h1 className={classes.AddTitle}>Add word!</h1>
        <Logo />
        <form>

          <label className={classes.AddLabel}>Language</label>
          <select onChange={(event => {setLanguage(event.target.value)})} className={classes.AddInput}>
            <option disabled selected value> -- Select a language -- </option>
            <option value="Dutch">Dutch</option>
            <option value="English">English</option>
          </select>

          <label className={classes.AddLabel}>Word</label>
          <input type="text" onChange={(event => {setWord(event.target.value)})} className={classes.AddInput}/>

          <label className={classes.AddLabel}>Definition</label>
          <input type="text" onChange={(event => {setDefinition(event.target.value)})} className={classes.AddInput}/>
    
          <button onClick={addToList} className={classes.AddBtn}>Add New Word!</button>
        </form>

      </div>
    );
  }

export default AddWord;