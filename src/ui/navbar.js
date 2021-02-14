import React from 'react'
import './navbar.css'
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom'; 

export default function navbar() {
    return (
        <div class="navbar-fixed">
            <nav class=" indigo darken-3">
            <div class="nav-wrapper container">
                <NavLink to="/"><a href="#" class="right brand-logo log">MemeStream</a></NavLink>
                <ul id="nav-mobile" class="log center hide-on-med-and-down">
                    <li><NavLink to="/memes"  style={{fontSize:'20px'}}>View Memes</NavLink></li>
                    <li><NavLink to="/post"  style={{fontSize:'20px'}}>Post a Meme</NavLink></li>
                    <li><NavLink to="/about"  style={{fontSize:'20px'}}>About Developer</NavLink></li>
                </ul>
            </div>
        </nav>
        </div>
    )
}
