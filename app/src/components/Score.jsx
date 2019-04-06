import React from 'react';
import './Score.css'

export default function Score (props) {
    const { currentScore, highScore } = props;
    return(
        <h2 className='text-light'>Score: {currentScore} | Hi-Score: {highScore}</h2>
    )
}