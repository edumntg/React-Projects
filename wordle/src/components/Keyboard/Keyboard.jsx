import React from 'react'
import "./Keyboard.css"
import KeyboardButton from './KeyboardButton'
function Keyboard({handleOnClick}) {
    return (
        <>
        <div className="row">
            <KeyboardButton letter="Q" handleOnClick={handleOnClick}/>
            <KeyboardButton letter="W" handleOnClick={handleOnClick}/>
            <KeyboardButton letter="E" handleOnClick={handleOnClick}/>
            <KeyboardButton letter="R" handleOnClick={handleOnClick}/>
            <KeyboardButton letter="T" handleOnClick={handleOnClick}/>
            <KeyboardButton letter="Y" handleOnClick={handleOnClick}/>
            <KeyboardButton letter="U" handleOnClick={handleOnClick}/>
            <KeyboardButton letter="I" handleOnClick={handleOnClick}/>
            <KeyboardButton letter="O" handleOnClick={handleOnClick}/>
            <KeyboardButton letter="P" handleOnClick={handleOnClick}/>
        </div>
        <div className="row">
            <KeyboardButton letter="←" special={true} handleOnClick={handleOnClick}/>
            <KeyboardButton letter="A" handleOnClick={handleOnClick}/>
            <KeyboardButton letter="S" handleOnClick={handleOnClick}/>
            <KeyboardButton letter="D" handleOnClick={handleOnClick}/>
            <KeyboardButton letter="F" handleOnClick={handleOnClick}/>
            <KeyboardButton letter="G" handleOnClick={handleOnClick}/>
            <KeyboardButton letter="H" handleOnClick={handleOnClick}/>
            <KeyboardButton letter="J" handleOnClick={handleOnClick}/>
            <KeyboardButton letter="K" handleOnClick={handleOnClick}/>
            <KeyboardButton letter="L" handleOnClick={handleOnClick}/>
            <KeyboardButton letter="Enter" special={true} handleOnClick={handleOnClick}/>
        </div>
        <div className="row">
            <KeyboardButton letter="Z" handleOnClick={handleOnClick}/>
            <KeyboardButton letter="X" handleOnClick={handleOnClick}/>
            <KeyboardButton letter="C" handleOnClick={handleOnClick}/>
            <KeyboardButton letter="V" handleOnClick={handleOnClick}/>
            <KeyboardButton letter="B" handleOnClick={handleOnClick}/>
            <KeyboardButton letter="N" handleOnClick={handleOnClick}/>
            <KeyboardButton letter="M" handleOnClick={handleOnClick}/>
        </div>
        </>
    )
}

export default Keyboard