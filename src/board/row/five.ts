import { IRow } from ".";
import { IBoardSquare } from "..";
import { Column } from "../Columns";
import { Row } from "../Rows";

export const A5: IBoardSquare = {
    id: "A5",
    row: Row.Five,
    column: Column.A,
}

export const B5: IBoardSquare = {
    id: "B5",
    row: Row.Five,
    column: Column.B,
}

export const C5: IBoardSquare = {
    id: "C5",
    row: Row.Five,
    column: Column.C,
}

export const D5: IBoardSquare = {
    id: "D5",
    row: Row.Five,
    column: Column.D,
}

export const E5: IBoardSquare = {
    id: "E5",
    row: Row.Five,
    column: Column.E,
}

export const F5: IBoardSquare = {
    id: "F5",
    row: Row.Five,
    column: Column.F,
}

export const G5: IBoardSquare = {
    id: "G5",
    row: Row.Five,
    column: Column.G,
}

export const H5: IBoardSquare = {
    id: "H5",
    row: Row.Five,
    column: Column.H,
}

export const rowFive: IRow = { 
    rowSquares: [A5, B5, C5, D5, E5, F5, G5, H5,]
}