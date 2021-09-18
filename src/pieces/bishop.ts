import { Color, IPiece, Movement } from ".";
import { C1, F1 } from "../board/row/one";

export const whiteBishop1: IPiece = {
    id: "wb1",
    name: "White Bishop 1",
    color: Color.White,
    boardSquare: C1,
    movement: Movement.Bishop,
    value: 3,
}

export const whiteBishop2: IPiece = {
    id: "wb2",
    name: "White Bishop 2",
    color: Color.White,
    boardSquare: F1,
    movement: Movement.Bishop,
    value: 3,
}

export const blackBishop1: IPiece = {
    id: "bb1",
    name: "Black Bishop 1",
    color: Color.Black,
    boardSquare: C8,
    movement: Movement.Bishop,
    value: 3,
}

export const blackBishop2: IPiece = {
    id: "bb2",
    name: "Black Bishop 2",
    color: Color.Black,
    boardSquare: F8,
    movement: Movement.Bishop,
    value: 3,
}