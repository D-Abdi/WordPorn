import React from 'react';
import { useHistory } from 'react-router-dom';
import logoImage from '../../assets/logo.png';
import classes from './Logo.module.css';

const Logo = (props) => {
    const history = useHistory();

    return (
        <img  src={logoImage} alt="Back Button"  className={classes.Logo} onClick={history.goBack} />
    )
}

export default Logo;