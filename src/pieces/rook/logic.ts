import { IPiece } from "..";
import { IBoardSquare } from "../../board";
import { squaresArr } from "../../board/squares";

export const rookMovementLogic = (rook: IPiece): IBoardSquare[] => {
    let arr: IBoardSquare[] = [];
    let upDone = false;
    let rightDone = false;
    let downDone = false;
    let leftDone = false;

    const checkOccupation = (square: IBoardSquare | undefined): boolean => {
        if (square) {
            if (square.piece) {
                if (square.piece.color !== rook.color) {
                    arr.push(square as IBoardSquare);
                }
                return true;
            } else {
                arr.push(square as IBoardSquare);
                return false;
            }
        } else {
            return true;
        }
    }

    for (let x = 1; x < 8; x++) {
        const up = rook.row! + x;
        const down = rook.row! - x;
        const right = rook.column! + x;
        const left = rook.column! - x;

        upDone = checkOccupation(squaresArr[up][rook.column!]);
        rightDone = checkOccupation(squaresArr[rook.row!][right]);
        downDone = checkOccupation(squaresArr[down][rook.column!]);
        leftDone = checkOccupation(squaresArr[rook.row!][left]);

        if (upDone && downDone && leftDone && rightDone) {
            break;
        }
    }

    return arr;
}
