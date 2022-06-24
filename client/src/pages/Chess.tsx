import React, { useEffect, useState } from 'react';
import '../App.css';
import BoardComponent from '../components/BoardComponent';
import Timer from '../components/Timer';
import { Board } from '../models/Board';
import { Colors } from '../models/Colors';
import { Player } from '../models/Player';

const Chess = () => {

    const [board, setBoard] = useState(new Board());
    const [whitePlayer, ] = useState(new Player(Colors.WHITE));
    const [blackPlayer, ] = useState(new Player(Colors.BLACK));
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  
    useEffect(() => {
      restart();
      setCurrentPlayer(whitePlayer);
    }, []);
  
    function restart() {
      const newBoard = new Board();
      newBoard.initCells();
      newBoard.addFigures();
      setBoard(newBoard);
      setCurrentPlayer(whitePlayer);
    }
  
    function swapPlayer() {
      setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
    }
  
    async function handleClick() {
      await fetch('http://localhost:5000/api/user/test').then(res => res.json()).then(json => console.log(json));
    }

    return (
        <div className="app">
      <Timer restart={restart} currentPlayer={currentPlayer} />
      <BoardComponent 
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <button onClick={handleClick}>Button</button>
    </div>
    );
}

export default Chess;