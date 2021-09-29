import { Color, IPiece } from "..";
import { IBoardSquare } from "../../board";
import { squaresArr } from "../../board/squares";

export const pawnMovementLogic = (pawn: IPiece): IBoardSquare[] => {
    if (!pawn.taken) {
        const checkColor = (num: number): number => {
            return pawn.color === Color.White 
                ? pawn.row! + num
                : pawn.row! - num;
        }

        const getMoves = (): IBoardSquare[] => {
            let arr: IBoardSquare[] = [];
            const one = squaresArr[checkColor(1)][pawn.column!];

            if(one && !one.piece) {
                arr.push(one);
            }

            if (!pawn.hasMoved) {
                const two = squaresArr[checkColor(2)][pawn.column!];

                if (two && !two.piece) {
                    arr.push(two);
                }
            }

            return arr;
        }

        const checkSquare = (square: IBoardSquare | undefined): boolean => {
            return !!(!!square && square.piece && square.piece.color !== pawn.color);
        }

        const getAttacks = (): IBoardSquare[] => {
            let arr: IBoardSquare[] = [];
            const diagRight =  squaresArr[checkColor(1)][pawn.column! + 1];
            const diagLeft =  squaresArr[checkColor(1)][pawn.column! - 1];
            const enPassantRight = squaresArr[pawn.row!][pawn.column! + 1];
            const enPassantLeft = squaresArr[pawn.row!][pawn.column! - 1];

            if (checkSquare(diagRight)) {
                arr.push(diagRight!);
            }
            if (checkSquare(diagLeft)) {
                arr.push(diagLeft!);
            }
            if (checkSquare(enPassantRight) && enPassantRight?.piece!.enPassantable) {
                arr.push(enPassantRight);
            }
            if (checkSquare(enPassantLeft) && enPassantLeft?.piece!.enPassantable) {
                arr.push(enPassantLeft);
            }

            return arr;
        }

       return [...getMoves(), ...getAttacks()];
    }

    return [];
}