import { Color, IPiece, Movement } from "..";

export const whiteKnight1: IPiece = {
    id: "wn1",
    name: "White Knight 1",
    color: Color.White,
    boardSquareId: "B1",
    movement: Movement.Knight,
    value: 3,
}

export const whiteKnight2: IPiece = {
    id: "wn2",
    name: "White Knight 2",
    color: Color.White,
    boardSquareId: "G1",
    movement: Movement.Knight,
    value: 3,
}

export const blackKnight1: IPiece = {
    id: "bn1",
    name: "Black Knight 1",
    color: Color.White,
    boardSquareId: "B8",
    movement: Movement.Knight,
    value: 3,
}

export const blackKnight2: IPiece = {
    id: "bn2",
    name: "Black Knight 2",
    color: Color.White,
    boardSquareId: "G8",
    movement: Movement.Knight,
    value: 3,
}
