import { IRow } from ".";
import { IBoardSquare } from "..";
import { Column } from "../Columns";
import { Row } from "../Rows";

export const A4: IBoardSquare = {
    id: "A4",
    row: Row.Four,
    column: Column.A,
}

export const B4: IBoardSquare = {
    id: "B4",
    row: Row.Four,
    column: Column.B,
}

export const C4: IBoardSquare = {
    id: "C4",
    row: Row.Four,
    column: Column.C,
}

export const D4: IBoardSquare = {
    id: "D4",
    row: Row.Four,
    column: Column.D,
}

export const E4: IBoardSquare = {
    id: "E4",
    row: Row.Four,
    column: Column.E,
}

export const F4: IBoardSquare = {
    id: "F4",
    row: Row.Four,
    column: Column.F,
}

export const G4: IBoardSquare = {
    id: "G4",
    row: Row.Four,
    column: Column.G,
}

export const H4: IBoardSquare = {
    id: "H4",
    row: Row.Four,
    column: Column.H,
}

export const rowFour: IRow = { 
    rowSquares: [A4, B4, C4, D4, E4, F4, G4, H4,]
}