
import { IRow } from ".";
import { IBoardSquare } from "..";
import { blackBishop1, blackBishop2, blackKing, blackKnight1, blackKnight2, blackQueen, blackRook1, blackRook2 } from "../../pieces";
import { Column } from "../Columns";
import { Row } from "../Rows";

export const A8: IBoardSquare = {
    id: "A8",
    row: Row.Eight,
    column: Column.A,
    piece: blackRook1,
}

export const B8: IBoardSquare = {
    id: "B8",
    row: Row.Eight,
    column: Column.B,
    piece: blackKnight1,
}

export const C8: IBoardSquare = {
    id: "C8",
    row: Row.Eight,
    column: Column.C,
    piece: blackBishop1,
}

export const D8: IBoardSquare = {
    id: "D8",
    row: Row.Eight,
    column: Column.B,
    piece: blackQueen,
}

export const E8: IBoardSquare = {
    id: "E8",
    row: Row.Eight,
    column: Column.E,
    piece: blackKing,
}

export const F8: IBoardSquare = {
    id: "F8",
    row: Row.Eight,
    column: Column.F,
    piece: blackBishop2,
}

export const G8: IBoardSquare = {
    id: "G8",
    row: Row.Eight,
    column: Column.G,
    piece: blackKnight2,
}

export const H8: IBoardSquare = {
    id: "H8",
    row: Row.Eight,
    column: Column.H,
    piece: blackRook2,
}

export const rowEight: IRow = { 
    rowSquares: [A8, B8, C8, D8, E8, F8, G8, H8,]
}