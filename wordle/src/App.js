import { useState, useEffect } from 'react';
import './App.css';
import Wordle from "./components/Wordle/Wordle";

const DEBUG = true; // set to true to print the hidden word

export default function App() {
  const [solution, setSolution] = useState(null);

  // Get list of 5-letter words from a public github repository I found while googling
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/tabatkins/wordle-list/main/words')
    .then((res) => res.text())
    .then(text => {
      // Split text into words
      let words = text.split('\n');
      // Now, pick a random word
      let randomWord = words[Math.floor(Math.random()*words.length)];
      setSolution(randomWord);
      if(DEBUG) {
        console.log('The hidden word is:', randomWord);
      }
    })
    .catch((error) => {
      console.log('ERROR DURING FETCH', error);
    });
  }, [setSolution]);

  return (
    solution && <Wordle solution={solution}/>
  );
}