import { IRow } from ".";
import { IBoardSquare } from "..";
import { whiteBishop1, whiteBishop2, whiteKing, whiteKnight1, whiteKnight2, whiteQueen, whiteRook1, whiteRook2 } from "../../pieces";
import { Column } from "../Columns";
import { Row } from "../Rows";

export const A1: IBoardSquare = {
    id: "A1",
    row: Row.One,
    column: Column.A,
    piece: whiteRook1,
}

export const B1: IBoardSquare = {
    id: "B1",
    row: Row.One,
    column: Column.B,
    piece: whiteKnight1,
}

export const C1: IBoardSquare = {
    id: "C1",
    row: Row.One,
    column: Column.C,
    piece: whiteBishop1,
}

export const D1: IBoardSquare = {
    id: "D1",
    row: Row.One,
    column: Column.B,
    piece: whiteQueen,
}

export const E1: IBoardSquare = {
    id: "E1",
    row: Row.One,
    column: Column.E,
    piece: whiteKing,
}

export const F1: IBoardSquare = {
    id: "F1",
    row: Row.One,
    column: Column.F,
    piece: whiteBishop2,
}

export const G1: IBoardSquare = {
    id: "G1",
    row: Row.One,
    column: Column.G,
    piece: whiteKnight2,
}

export const H1: IBoardSquare = {
    id: "H1",
    row: Row.One,
    column: Column.H,
    piece: whiteRook2,
}

export const rowOne: IRow = { 
    rowSquares: [A1, B1, C1, D1, E1, F1, G1, H1,]
}