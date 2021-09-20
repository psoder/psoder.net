import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'

export default function Navbar() {
    return (
        <div id="navbar">
            <Link className="navbar-item" id="logo" to={'/'}>
                <div className="turquoise" id="psoder">psoder</div><div id=".net">.net</div>
            </Link>
            <Link className="navbar-item" to={'/projects'}>Projects</Link>
            <Link className="navbar-item" to={'/about'}>About</Link>
        </div>
    );
}