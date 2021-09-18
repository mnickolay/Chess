import { Color, IPiece, Movement } from "..";

export const whiteBishop1: IPiece = {
    id: "wb1",
    name: "White Bishop 1",
    color: Color.White,
    boardSquareId: "C1",
    movement: Movement.Bishop,
    value: 3,
}

export const whiteBishop2: IPiece = {
    id: "wb2",
    name: "White Bishop 2",
    color: Color.White,
    boardSquareId: "F1",
    movement: Movement.Bishop,
    value: 3,
}

export const blackBishop1: IPiece = {
    id: "bb1",
    name: "Black Bishop 1",
    color: Color.Black,
    boardSquareId: "C8",
    movement: Movement.Bishop,
    value: 3,
}

export const blackBishop2: IPiece = {
    id: "bb2",
    name: "Black Bishop 2",
    color: Color.Black,
    boardSquareId: "F8",
    movement: Movement.Bishop,
    value: 3,
}