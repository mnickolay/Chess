import { Action } from "redux";
import { IBoardSquare } from "../../board";
import { squares } from "../../board/squares";
import { IPiece } from "../../pieces";

const LOAD_PIECES = "LOAD_PIECES";
const MOVE_PIECE = "BOARD_MOVE_PIECE";

interface ILoadPieces extends Action {
    type: typeof LOAD_PIECES;
}

interface IMovePiece extends Action {
    type: typeof MOVE_PIECE;
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
    action?: ILoadPieces | IMovePiece
): Readonly<IBoardState> {
    switch (action?.type) {
        case LOAD_PIECES:
            const newBoard = state.board.map((b) => {

            })
            return {
                ...state,
            }
        case MOVE_PIECE:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export const movePiece = (piece: IPiece, boardSquare: IBoardSquare): IMovePiece => ({
    type: MOVE_PIECE,
    piece,
    boardSquare,
});
