import React, { useState } from 'react'
import Die1 from './dice'
import Die2 from './dice2';
import './dice.css'

function Rolldice() { 
    const [roll, setRoll] = useState(0);
    const [roll2, setRoll2] = useState(0)


    const randomNum = Math.floor(Math.random() * (7-1)) + 1;
    const randomNum2 = Math.floor(Math.random() * (7-1)) + 1;
    
    return (
        <div>
            <Die1 roll={roll} />
            <Die2 roll2={roll2} /><br/>
            <button className='button' onClick={() => setRoll(randomNum) + setRoll2(randomNum2)}>
            Roll Die</button>
        </div>
    );
}

export default Rolldice