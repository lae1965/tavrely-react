import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo.png';
import { headerMenu } from '../../Constants/Menues';

export const Header = () => {
    return(
        <header className="header container">
            <Link to="/" className="header__logo">
                <img className="header__img" src={logo} alt="logo" />
            </Link>
            <nav className="header__menu">
                {headerMenu.map((item, i) => 
                    <Link to={item.href} className="header__item" key={i}>{item.name}</Link>
                )}
            </nav>
        </header>
    );  
};