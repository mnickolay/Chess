
import { IRow } from ".";
import { IBoardSquare } from "..";
import { blackPawn1, blackPawn2, blackPawn3, blackPawn4, blackPawn5, blackPawn6, blackPawn7, blackPawn8 } from "../../pieces";
import { Column } from "../Columns";
import { Row } from "../Rows";

export const A7: IBoardSquare = {
    id: "A7",
    row: Row.Seven,
    column: Column.A,
    piece: blackPawn1,
}

export const B7: IBoardSquare = {
    id: "B7",
    row: Row.Seven,
    column: Column.B,
    piece: blackPawn2,
}

export const C7: IBoardSquare = {
    id: "C7",
    row: Row.Seven,
    column: Column.C,
    piece: blackPawn3,
}

export const D7: IBoardSquare = {
    id: "D7",
    row: Row.Seven,
    column: Column.B,
    piece: blackPawn4,
}

export const E7: IBoardSquare = {
    id: "E7",
    row: Row.Seven,
    column: Column.E,
    piece: blackPawn5,
}

export const F7: IBoardSquare = {
    id: "F7",
    row: Row.Seven,
    column: Column.F,
    piece: blackPawn6,
}

export const G7: IBoardSquare = {
    id: "G7",
    row: Row.Seven,
    column: Column.G,
    piece: blackPawn7,
}

export const H7: IBoardSquare = {
    id: "H7",
    row: Row.Seven,
    column: Column.H,
    piece: blackPawn8,
}

export const rowSeven: IRow = { 
    rowSquares: [A7, B7, C7, D7, E7, F7, G7, H7,]
}