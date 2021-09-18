import { Color, IPiece, Movement } from ".";
import { E1 } from "../board/row/one";

export const whiteKing: IPiece = {
    id: "wk",
    name: "White King",
    color: Color.White,
    boardSquare: E1,
    movement: Movement.King,
    value: 0,
}

export const blackKing: IPiece = {
    id: "bk",
    name: "Black King",
    color: Color.Black,
    boardSquare: E8,
    movement: Movement.King,
    value: 0,
}
