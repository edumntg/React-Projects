import React, { useState, useEffect } from 'react'
import Board from '../Board/Board';
import Keyboard from '../Keyboard/Keyboard'
import WordleUtils from '../../hooks/WordleUtils'
import "./Wordle.css"
function Wordle({solution}) {
    const {turn, isCorrect, isGameOver, history, grid, currentIndex, handleKeyDown, handleOnClick} = WordleUtils(solution.toUpperCase());

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

  return (
    <div className="main">
      <div className="status">
        {isCorrect && 
          <span>Congratulations! You won!</span>
        }
        {!isCorrect && isGameOver && 
          <span>You lost! The hidden word was {solution}</span>
        }
      </div>
      <div className="board">
        <Board turn={turn} currentIndex={currentIndex} grid={grid} history={history}/>
      </div>
      <div className="keyboard">
        <Keyboard handleOnClick={handleOnClick}/>
      </div>
    </div>
  )
}

export default Wordle