import { useState } from 'react';
import diceEmpty from '../assets/images/dice-empty (1).png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';


const Dice = () => {
    const [value, setValue] = useState(dice5);

    const dices = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6];

    const handleValue = () => {
        setValue(dices[0])
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * dices.length);
            setValue(dices[randomIndex]);
        }, 1000)
    }



    return (
        <div className="Dice">
            <img src={value} onClick={handleValue} alt="dice" style={{ width: '200px', display: 'block', margin: '50px auto' }} />

        </div>
    );
}

export default Dice;