import { IRow } from ".";
import { IBoardSquare } from "..";
import { Column } from "../Columns";
import { Row } from "../Rows";

export const A3: IBoardSquare = {
    id: "A3",
    row: Row.Three,
    column: Column.A,
}

export const B3: IBoardSquare = {
    id: "B3",
    row: Row.Three,
    column: Column.B,
}

export const C3: IBoardSquare = {
    id: "C3",
    row: Row.Three,
    column: Column.C,
}

export const D3: IBoardSquare = {
    id: "D3",
    row: Row.Three,
    column: Column.D,
}

export const E3: IBoardSquare = {
    id: "E3",
    row: Row.Three,
    column: Column.E,
}

export const F3: IBoardSquare = {
    id: "F3",
    row: Row.Three,
    column: Column.F,
}

export const G3: IBoardSquare = {
    id: "G3",
    row: Row.Three,
    column: Column.G,
}

export const H3: IBoardSquare = {
    id: "H3",
    row: Row.Three,
    column: Column.H,
}

export const rowThree: IRow = { 
    rowSquares: [A3, B3, C3, D3, E3, F3, G3, H3,]
}