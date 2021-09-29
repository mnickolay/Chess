import { Color, IPiece, Movement } from "..";

export const whiteKing: IPiece = {
    id: "wk",
    name: "White King",
    color: Color.White,
    boardSquareId: "E1",
    movement: Movement.King,
    value: 0,
    inCheck: false,
    hasCastled: false,
}

export const blackKing: IPiece = {
    id: "bk",
    name: "Black King",
    color: Color.Black,
    boardSquareId: "E8",
    movement: Movement.King,
    value: 0,
    inCheck: false,
    hasCastled: false,
}
