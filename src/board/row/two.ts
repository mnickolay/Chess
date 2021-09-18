import { IRow } from ".";
import { IBoardSquare } from "..";
import { whitePawn1, whitePawn2, whitePawn3, whitePawn4, whitePawn5, whitePawn6, whitePawn7, whitePawn8 } from "../../pieces";
import { Column } from "../Columns";
import { Row } from "../Rows";

export const A2: IBoardSquare = {
    id: "A2",
    row: Row.Two,
    column: Column.A,
    piece: whitePawn1,
}

export const B2: IBoardSquare = {
    id: "B2",
    row: Row.Two,
    column: Column.B,
    piece: whitePawn2,
}

export const C2: IBoardSquare = {
    id: "C2",
    row: Row.Two,
    column: Column.C,
    piece: whitePawn3,
}

export const D2: IBoardSquare = {
    id: "D2",
    row: Row.Two,
    column: Column.B,
    piece: whitePawn4,
}

export const E2: IBoardSquare = {
    id: "E2",
    row: Row.Two,
    column: Column.E,
    piece: whitePawn5,
}

export const F2: IBoardSquare = {
    id: "F2",
    row: Row.Two,
    column: Column.F,
    piece: whitePawn6,
}

export const G2: IBoardSquare = {
    id: "G2",
    row: Row.Two,
    column: Column.G,
    piece: whitePawn7,
}

export const H2: IBoardSquare = {
    id: "H2",
    row: Row.Two,
    column: Column.H,
    piece: whitePawn8,
}

export const rowTwo: IRow = { 
    rowSquares: [A2, B2, C2, D2, E2, F2, G2, H2,]
}