import { Color, IPiece, Movement } from ".";
import { B8, G8 } from "../board/row";
import { B1, G1 } from "../board/row/one";

export const whiteKnight1: IPiece = {
    id: "wn1",
    name: "White Knight 1",
    color: Color.White,
    boardSquare: B1,
    movement: Movement.Knight,
    value: 3,
}

export const whiteKnight2: IPiece = {
    id: "wn2",
    name: "White Knight 2",
    color: Color.White,
    boardSquare: G1,
    movement: Movement.Knight,
    value: 3,
}

export const blackKnight1: IPiece = {
    id: "bn1",
    name: "Black Knight 1",
    color: Color.White,
    boardSquare: B8,
    movement: Movement.Knight,
    value: 3,
}

export const blackKnight2: IPiece = {
    id: "bn2",
    name: "Black Knight 2",
    color: Color.White,
    boardSquare: G8,
    movement: Movement.Knight,
    value: 3,
}
