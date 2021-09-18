
import { IBoardSquare } from "..";
import { Column } from "../Columns";
import { Row } from "../Rows";

export const A6: IBoardSquare = {
    id: "A6",
    row: Row.Six,
    column: Column.A,
}

export const B6: IBoardSquare = {
    id: "B6",
    row: Row.Six,
    column: Column.B,
}

export const C6: IBoardSquare = {
    id: "C6",
    row: Row.Six,
    column: Column.C,
}

export const D6: IBoardSquare = {
    id: "D6",
    row: Row.Six,
    column: Column.D,
}

export const E6: IBoardSquare = {
    id: "E6",
    row: Row.Six,
    column: Column.E,
}

export const F6: IBoardSquare = {
    id: "F6",
    row: Row.Six,
    column: Column.F,
}

export const G6: IBoardSquare = {
    id: "G6",
    row: Row.Six,
    column: Column.G,
}

export const H6: IBoardSquare = {
    id: "H6",
    row: Row.Six,
    column: Column.H,
}

export const rowSix: IRow = { 
    rowSquares: [A6, B6, C6, D6, E6, F6, G6, H6,]
}