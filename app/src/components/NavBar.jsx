import React from 'react'
import Score from './Score'
import './NavBar.css'

export default function NavBar (props) {
    return (
        <nav className="navbar">
            <h2 className="navbar-nav text-light">PepeMatch</h2>
            <h2 className="navbar-nav text-light">{props.feedback}</h2>
            <Score currentScore={props.currentScore} highScore={props.highScore} className="navbar-nav"/>
        </nav>
    )
} 