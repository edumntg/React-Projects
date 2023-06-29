import {useState} from 'react';

export default function WordleUtils(solution) {
    const [turn, setTurn] = useState(0);
    const [isWordCorrect, setIsWordCorrect] = useState(false);
    const [history, setHistory] = useState([]);
    const [grid, setGrid] = useState([
        Array(5).fill(null),
        Array(5).fill(null),
        Array(5).fill(null),
        Array(5).fill(null),
        Array(5).fill(null),
        Array(5).fill(null)
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isGameOver, setGameOver] = useState(false);

    const formatGuess = (guess) => {
        let formatted = [];
        // loop through characters
        for(let i = 0; i < guess.length; i++) {
            let letter = guess[i].toUpperCase();
            if(letter === solution[i]) {
                formatted.push({key: letter, color: 'green'});
            } else if(solution.includes(letter)) {
                formatted.push({key: letter, color: 'yellow'});
            } else {
                formatted.push({key: letter, color: 'gray'});
            }
        }

        return formatted;
    }

    const validateGuess = (formatted) => {
        // check if word is correct
        // include into history
        let prevHistory = history.slice();
        prevHistory.push(formatted);
        setHistory(prevHistory);
        if(formatted.every(letter => letter.color === 'green')) {
            setIsWordCorrect(true);
            return;
        }
    }

    const handleKeyDown = ({key}) => {
        // Is game finished?
        if(isWordCorrect || isGameOver) {
            return;
        }

        if(key === 'Enter') {
            // check that word is 5-letters word
            if(turn < 5) {
                alert('Word must be 5-letters long');
                return;
            }

            // Get current guess
            let currentGuess = grid[currentIndex].slice();

            // Format it into a object
            const formattedGuess = formatGuess(currentGuess);

            // check if word is already used
            // take all elements from history and join them into words
            let historyFlatten = history.map(object => {
                return object.reduce((actual, obj) => actual + obj.key, '');
            });
            
            // Convert from object ({key: 'A', color: 'green', ...}) to word
            let currentGuessWord = currentGuess.reduce((actual, obj) => actual + obj, '').toUpperCase();
            if(historyFlatten.includes(currentGuessWord)) {
                alert('You already used this word');
                return;
            }

            // Validate
            validateGuess(formattedGuess);
            // increase index
            setCurrentIndex(currentIndex + 1);
            // Reset turn
            setTurn(0);

            // All words used but still didn't guess the word
            if(currentIndex === 5 && !isWordCorrect) {
                // game over
                alert("You lost!");
                setGameOver(true);
            }
        } else if(key === 'Backspace') {
            // delete current letter
            if(turn > 0) {
                let currentGuess = grid[currentIndex].slice();
                currentGuess[turn-1] = null;

                // update on grid
                setGrid(prev => {
                    let copy = [...prev];
                    copy[currentIndex] = currentGuess;
                    return copy;
                });

                //setCurrentGuess(currentGuessCopy);
                setTurn(turn - 1);
                return;
            }
        } else {
            // check if key is a valid letter
            let currentGuess = grid[currentIndex].slice();
            if(/^[A-Za-z]$/.test(key) && !currentGuess[currentGuess.length-1]) {
                currentGuess[turn] = key;
                //setCurrentGuess(currentGuessCopy);
                // update grid
                setGrid(prev => {
                    let copy = prev.slice();
                    copy[currentIndex] = currentGuess;
                    return copy;
                });
                setTurn(turn + 1);
            }
        }
    }

    const handleOnClick = (letter, special = false) => {
        if(isWordCorrect || isGameOver) {
            return;
        }

        // check for special ones
        if(special) {
            if(letter.toLowerCase() === 'enter') {
                // check that word is 5-letters word
                if(turn < 5) {
                    alert('Word must be 5-letters long');
                    return;
                }

                let currentGuess = grid[currentIndex].slice();

                const formattedGuess = formatGuess(currentGuess);

                // check if word is already used
                // take all elements from history and join them into words
                let historyFlatten = history.map(object => {
                    return object.reduce((actual, obj) => actual + obj.key, '');
                });
                let currentGuessWord = currentGuess.reduce((actual, obj) => actual + obj, '').toUpperCase();

                if(historyFlatten.includes(currentGuessWord)) {
                    alert('You already used this word');
                    return;
                }

                validateGuess(formattedGuess);
                // increase index
                setCurrentIndex(currentIndex + 1);
                //setCurrentGuess(Array(6).fill(null)); // new empty guess
                setTurn(0);

                if(currentIndex === 5 && !isWordCorrect) {
                    // game over
                    alert("You lost!");
                    setGameOver(true);
                }
            } else {
                // it is backspace
                // delete current letter
                if(turn > 0) {
                    let currentGuess = grid[currentIndex].slice();
                    currentGuess[turn-1] = null;

                    // update on grid
                    setGrid(prev => {
                        let copy = [...prev];
                        copy[currentIndex] = currentGuess;
                        return copy;
                    });

                    setTurn(turn - 1);
                    return;
                }
            }
        }

        let currentGuess = grid[currentIndex].slice();
        if(/^[A-Za-z]$/.test(letter) && !currentGuess[currentGuess.length-1]) {
            currentGuess[turn] = letter;
            //setCurrentGuess(currentGuessCopy);
            // update grid
            setGrid(prev => {
                let copy = prev.slice();
                copy[currentIndex] = currentGuess;
                return copy;
            });
            setTurn(turn + 1);
        }
    }

    return {
        turn,
        isWordCorrect,
        isGameOver,
        history,
        grid,
        currentIndex,
        handleKeyDown,
        handleOnClick
    }
}