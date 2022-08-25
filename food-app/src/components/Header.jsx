import React from "react";
import icon from '../images/instagram.svg'

function Header() {
    return <header>
        <h1>
            Vancity Foodiee
            <a href='https://www.instagram.com/vancityfoodiee/'
               target="_blank" rel="noopener noreferrer"
            >
            <img className='headerIcon'
                 src={icon}
                 alt='IGicon'
            />
            </a>
        </h1>
    </header>
}

export default Header;
