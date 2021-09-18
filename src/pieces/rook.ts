import { Color, IPiece, Movement } from ".";
import { A1, H1 } from "../board/row/one";

export const whiteRook1: IPiece = {
    id: "wr1",
    name: "White Rook 1",
    color: Color.White,
    boardSquare: A1,
    movement: Movement.Rook,
    value: 5,
};

export const whiteRook2: IPiece = {
    id: "wr2",
    name: "White Rook 2",
    color: Color.White,
    boardSquare: H1,
    movement: Movement.Rook,
    value: 5,
}

export const blackRook1: IPiece = {
    id: "br1",
    name: "Black Rook 1",
    color: Color.Black,
    boardSquare: A8,
    movement: Movement.Rook,
    value: 5,
}

export const blackRook2: IPiece = {
    id: "br2",
    name: "Black Rook 2",
    color: Color.Black,
    boardSquare: H8,
    movement: Movement.Rook,
    value: 5,
}
