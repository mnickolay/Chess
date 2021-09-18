import { Color, IPiece, Movement } from "..";

export const whiteQueen: IPiece = {
    id: "wq",
    name: "White Queen",
    color: Color.White,
    boardSquareId: "D1",
    movement: Movement.Queen,
    value: 9,
}

export const blackQueen: IPiece = {
    id: "bq",
    name: "Black Queen",
    color: Color.Black,
    boardSquareId: "D8",
    movement: Movement.Queen,
    value: 9,
}
