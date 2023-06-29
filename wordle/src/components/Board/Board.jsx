import React from 'react'
import "./Board.css"
import Word from '../Word/Word'
import {useState, useEffect} from 'react';

function Board({turn, currentIndex, grid, history}) {

  return (
    <>
      <div className="board-container">
        <Word wordIndex={0} slots={grid} history={history} currentIndex={currentIndex}/>
        <Word wordIndex={1} slots={grid} history={history} currentIndex={currentIndex}/>
        <Word wordIndex={2} slots={grid} history={history} currentIndex={currentIndex}/>
        <Word wordIndex={3} slots={grid} history={history} currentIndex={currentIndex}/>
        <Word wordIndex={4} slots={grid} history={history} currentIndex={currentIndex}/>
        <Word wordIndex={5} slots={grid} history={history} currentIndex={currentIndex}/>
      </div>
    </>
  )
}

export default Board