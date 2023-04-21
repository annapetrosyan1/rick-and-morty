import React from "react";
import {Link} from 'react-router-dom'
import '../pages/Main.css';
import Icon from '../assets/icon.svg'

function Header() {
    return (
        <div className="header">
            <Link to='/' className="icon">
                <img alt="icon" src={Icon}/>
            </Link>
            
            <div className="header-nav">
                <ul className="menu-header">
                    <li><Link className="menu-item" to='/characters'>Characters</Link></li>
                    <li><Link className="menu-item" to='/locations'>Locations</Link></li>
                    <li><Link className="menu-item" to='/episodes'>Episodes</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;