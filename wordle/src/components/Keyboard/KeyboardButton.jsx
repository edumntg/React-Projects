import React from 'react'
import "./KeyboardButton.css"
function KeyboardButton({letter, special, handleOnClick}) {
  return (
    <button className={`keyboardButton-${special ? 'special' : 'normal'}`} onClick={event => handleOnClick(letter, special)}>{letter}</button>
  )
}

export default KeyboardButton