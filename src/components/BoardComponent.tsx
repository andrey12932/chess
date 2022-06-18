import React, { useEffect, useState } from 'react';
import { clearLine } from 'readline';
import { Board } from '../models/Board';
import { Cell } from '../models/Cell';
import CellComponent from './CellComponent';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: React.FC<BoardProps> = ({board, setBoard}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    function click(cell: Cell) {
        if(selectedCell && selectedCell !== cell  && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            setSelectedCell(null);
        }
        if(cell.figure) {
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
        </div>
    );
}

export default BoardComponent;