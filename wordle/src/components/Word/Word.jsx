import React, { useState } from 'react'
import "./Word.css"
function Word({wordIndex, slots, history, currentIndex}) {
    const [index, setIndex] = useState(wordIndex);

    let letters;
    if(wordIndex >= currentIndex) {
        letters = slots[wordIndex].map((slot, index) => 
            <button className="slot-empty" id={`slot-${index}`}>{slot}</button>
        );
    } else {
        console.log('HISTORY', history);
        letters = history[wordIndex].map((slot, index) => 
            <button className={`slot-${slot.color}`} id={`slot-${index}`}>{slot.key}</button>
        );
    }

    return (
        <div className="row">
            {letters}
        </div>
    )
}

export default Word