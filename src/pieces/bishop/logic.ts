import { IPiece} from ".."
import { IBoardSquare } from "../../board";
import { squaresArr } from "../../board/squares";

export const bishopLogic = (bishop: IPiece): IBoardSquare[] => {
    if (!bishop.taken) {
        let available: IBoardSquare[] = [];
        let upLeftDone = false;
        let upRightDone = false;
        let downLeftDone = false;
        let downRightDone = false;

        const checkOccupation = (square: IBoardSquare | undefined): boolean => {
            if (square) {
                if (square?.piece) {
                    if (square.piece.color !== bishop.color) {
                        available.push(square as IBoardSquare);
                    }
                    return true;
                } else {
                    available.push(square as IBoardSquare);
                    return false;
                }
            } else {
                return true;
            }
        }
        
        for (let x = 1; x < 8; x++) {
            const up = bishop.row! + x;
            const down = bishop.row! - x;
            const right = bishop.column! + x;
            const left = bishop.column! - x;

            upLeftDone = checkOccupation(squaresArr[up][left]);
            upRightDone = checkOccupation(squaresArr[up][right]);
            downLeftDone = checkOccupation(squaresArr[down][left]);
            downRightDone = checkOccupation(squaresArr[down][right]);

            if (upLeftDone && upRightDone && downLeftDone && downRightDone) {
                break;
            }
        }

        return available;
    }

    return []
}