import React, { useEffect, useState } from 'react';
import { Board } from '../models/Board';
import { Cell } from '../models/Cell';
import { Player } from '../models/Player';
import CellComponent from './CellComponent';
import LostFigures from './LostFigures';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    currentPlayer: Player | null;
    swapPlayer: () => void;
}

const BoardComponent: React.FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    function click(cell: Cell) {
        if(selectedCell && selectedCell !== cell  && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            swapPlayer();
            setSelectedCell(null);
        } else {
            if(cell.figure?.color === currentPlayer?.color)
                setSelectedCell(cell);
        }
    }

    useEffect(() => {
        hightlightCells();
    }, [selectedCell]);

    function hightlightCells() {
        board.hightlightCells(selectedCell);
        updateBoard();
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
    }

    return (
        <>
        <div>
        <h3>Текущий игрок {currentPlayer?.color}</h3>
            <div
                className='board'
            >
                {board.cells.map((row, index) => (
                    <React.Fragment key={index}>
                        {row.map(cell => (
                            <CellComponent 
                                cell={cell}
                                key={cell.id}
                                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                                click={click}
                            />
                        ))}
                    </React.Fragment>
                ))}
            </div></div>
            <div>
                <LostFigures 
                    title='Черные фигуры'
                    figures={board.lostBlackFigures}
                />
                <LostFigures 
                    title='Белые фигуры'
                    figures={board.lostWhiteFigures}
                />
            </div>
        </>
        
    );
}

export default BoardComponent;