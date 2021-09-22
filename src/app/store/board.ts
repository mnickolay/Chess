import { Action } from "redux";
import { IBoardSquare } from "../../board";
import { squares } from "../../board/squares";
import { blackPieces, IPiece } from "../../pieces";

const LOAD_PIECES = "LOAD_PIECES";
const WHITE_MOVE = "BOARD_WHTIE_MOVE";
const BLACK_MOVE = "BOARD_BLACK_MOVE";

interface ILoadPieces extends Action {
    type: typeof LOAD_PIECES;
}

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

interface IBoard {
    squares: IBoardSquare[];
    whitePieces: IPiece[];
    blackPieces: IPiece[];
}

export interface IBoardState {
    board: IBoardSquare[];
    whiteTurn: boolean;
    blackTurn: boolean;
}

export function board(
    state: Readonly<IBoardState> = {
        board: squares,
        whiteTurn: true,
        blackTurn: false,
    },
    action?: ILoadPieces | IWhiteMove | IBlackMove
): Readonly<IBoardState> {
    switch (action?.type) {
        case LOAD_PIECES:
            const newBoard = state.board.map((b) => {

            })
            return {
                ...state,
            }
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