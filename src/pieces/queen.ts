import { Color, IPiece, Movement } from ".";
import { D8 } from "../board/row";
import { D1 } from "../board/row/one";

export const whiteQueen: IPiece = {
    id: "wq",
    name: "White Queen",
    color: Color.White,
    boardSquare: D1,
    movement: Movement.Queen,
    value: 9,
}

export const blackQueen: IPiece = {
    id: "bq",
    name: "Black Queen",
    color: Color.Black,
    boardSquare: D8,
    movement: Movement.Queen,
    value: 9,
}
