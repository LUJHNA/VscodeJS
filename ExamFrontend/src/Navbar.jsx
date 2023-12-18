import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'

function Navbar() {
    return (

    <header class = "header">
        <h1 class = "header__logo"><img src="https://theme.zdassets.com/theme_assets/497496/2cbaa195841ca8cf33b79e6c61e038ef77b1c0cf.png" width="250" ></img></h1>       
        <nav className="header__navbar">
            <ul class = "header__ul">
                <li><Link to="/" class="header__a">Home</Link></li>
                <li><Link to="/login" class="header__a">Login</Link></li>
                <li><Link to="/register" class="header__a">Register</Link></li>

            </ul>
        </nav>
    </header>
    );
}

export default Navbar;