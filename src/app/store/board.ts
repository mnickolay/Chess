import { Action } from "redux";
import { IBoardSquare } from "../../board";
import { squares } from "../../board/squares";
import { Color, IPiece } from "../../pieces";

const WHITE_MOVE = "BOARD_WHTIE_MOVE";
const BLACK_MOVE = "BOARD_BLACK_MOVE";

interface IWhiteMove extends Action {
    type: typeof WHITE_MOVE;
    piece: IPiece;
    boardSquare: IBoardSquare;
}

interface IBlackMove extends Action {
    type: typeof BLACK_MOVE;
    piece: IPiece;
    boardSquare: IBoardSquare;
}

export interface IBoardState {
    board: IBoardSquare[];
    turn: Color;
}

export function board(
    state: Readonly<IBoardState> = {
        board: squares,
        turn: Color.White,
    },
    action?: IWhiteMove | IBlackMove
): Readonly<IBoardState> {
    switch (action?.type) {
        case WHITE_MOVE:
            return {
                ...state,
            }
        case BLACK_MOVE:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export const whiteMove = (piece: IPiece, boardSquare: IBoardSquare): IWhiteMove => ({
    type: WHITE_MOVE,
    piece,
    boardSquare,
});

export const blackMove = (piece: IPiece, boardSquare: IBoardSquare): IBlackMove => ({
    type: BLACK_MOVE,
    piece,
    boardSquare,
});