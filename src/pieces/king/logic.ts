import { IPiece } from "..";
import { IBoardSquare } from "../../board";
import { squaresArr } from "../../board/squares";

export const kingMovemnetLogic = (king: IPiece): IBoardSquare[] => {
    let arr: IBoardSquare[] = [];

    const up = king.row! + 1;
    const down = king.row! - 1;
    const left = king.column! - 1;
    const right = king.row! + 1;

    const squares = [
        squaresArr[up][left],
        squaresArr[up][king.column!],
        squaresArr[up][right],
        squaresArr[king.row!][right],
        squaresArr[down][right],
        squaresArr[down][king.column!],
        squaresArr[down][left],
        squaresArr[king.row!][left],
    ];

    const checkSquare = (square: IBoardSquare | undefined) => {
        return !!(!!square && square.piece && square.piece.color !== king.color);
    }

    const checkIfCheckable = (square: IBoardSquare | undefined): boolean => {
        return !!(square?.controlledBy?.filter((s) => s.color !== king.color).length);
    }

    const combineAndAdd = (square: IBoardSquare | undefined) => {
        if (checkSquare(square) && !checkIfCheckable(square)) {
            arr.push(square!);
        }
    }
    
    squares.forEach((s) => combineAndAdd(s));

    return arr;
}