import { Color, IPiece, Movement } from "..";

export const whiteRook1: IPiece = {
    id: "wr1",
    name: "White Rook 1",
    color: Color.White,
    boardSquareId: "A1",
    movement: Movement.Rook,
    value: 5,
};

export const whiteRook2: IPiece = {
    id: "wr2",
    name: "White Rook 2",
    color: Color.White,
    boardSquareId: "H1",
    movement: Movement.Rook,
    value: 5,
}

export const blackRook1: IPiece = {
    id: "br1",
    name: "Black Rook 1",
    color: Color.Black,
    boardSquareId: "A8",
    movement: Movement.Rook,
    value: 5,
}

export const blackRook2: IPiece = {
    id: "br2",
    name: "Black Rook 2",
    color: Color.Black,
    boardSquareId: "H8",
    movement: Movement.Rook,
    value: 5,
}
