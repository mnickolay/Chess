import { Color, IPiece, Movement } from "..";

interface IPawn extends IPiece {
    hasMoved: boolean;
    enPassantable: boolean;
}

export const whitePawn1: IPawn = {
    id: "wp1",
    name: "White Pawn 1",
    color: Color.White,
    boardSquareId: "A2",
    movement: Movement.Pawn,
    value: 1,
    hasMoved: false,
    enPassantable: false,
}

export const whitePawn2: IPawn = {
    id: "wp2",
    name: "White Pawn 2",
    color: Color.White,
    boardSquareId: "B2",
    movement: Movement.Pawn,
    value: 1,
    hasMoved: false,
    enPassantable: false,
}

export const whitePawn3: IPawn = {
    id: "wp3",
    name: "White Pawn 3",
    color: Color.White,
    boardSquareId: "C2",
    movement: Movement.Pawn,
    value: 1,
    hasMoved: false,
    enPassantable: false,
}

export const whitePawn4: IPawn = {
    id: "wp4",
    name: "White Pawn 4",
    color: Color.White,
    boardSquareId: "D2",
    movement: Movement.Pawn,
    value: 1,
    hasMoved: false,
    enPassantable: false,
}

export const whitePawn5: IPawn = {
    id: "wp5",
    name: "White Pawn 5",
    color: Color.White,
    boardSquareId: "E2",
    movement: Movement.Pawn,
    value: 1,
    hasMoved: false,
    enPassantable: false,
}

export const whitePawn6: IPawn = {
    id: "wp6",
    name: "White Pawn 6",
    color: Color.White,
    boardSquareId: "F2",
    movement: Movement.Pawn,
    value: 1,
    hasMoved: false,
    enPassantable: false,
}

export const whitePawn7: IPawn = {
    id: "wp7",
    name: "White Pawn 7",
    color: Color.White,
    boardSquareId: "G2",
    movement: Movement.Pawn,
    value: 1,
    hasMoved: false,
    enPassantable: false,
}

export const whitePawn8: IPawn = {
    id: "wp8",
    name: "Black Pawn 8",
    color: Color.Black,
    boardSquareId: "H2",
    movement: Movement.Pawn,
    value: 1,
    hasMoved: false,
    enPassantable: false,
}

export const blackPawn1: IPawn = {
    id: "wp1",
    name: "Black Pawn 1",
    color: Color.Black,
    boardSquareId: "A7",
    movement: Movement.Pawn,
    value: 1,
    hasMoved: false,
    enPassantable: false,
}

export const blackPawn2: IPawn = {
    id: "wp2",
    name: "Black Pawn 2",
    color: Color.Black,
    boardSquareId: "B7",
    movement: Movement.Pawn,
    value: 1,
    hasMoved: false,
    enPassantable: false,
}

export const blackPawn3: IPawn = {
    id: "wp3",
    name: "Black Pawn 3",
    color: Color.Black,
    boardSquareId: "C7",
    movement: Movement.Pawn,
    value: 1,
    hasMoved: false,
    enPassantable: false,
}

export const blackPawn4: IPawn = {
    id: "wp4",
    name: "Black Pawn 4",
    color: Color.Black,
    boardSquareId: "D7",
    movement: Movement.Pawn,
    value: 1,
    hasMoved: false,
    enPassantable: false,
}

export const blackPawn5: IPawn = {
    id: "wp5",
    name: "Black Pawn 5",
    color: Color.Black,
    boardSquareId: "E7",
    movement: Movement.Pawn,
    value: 1,
    hasMoved: false,
    enPassantable: false,
}

export const blackPawn6: IPawn = {
    id: "wp6",
    name: "Black Pawn 6",
    color: Color.Black,
    boardSquareId: "F7",
    movement: Movement.Pawn,
    value: 1,
    hasMoved: false,
    enPassantable: false,
}

export const blackPawn7: IPawn = {
    id: "wp7",
    name: "Black Pawn 7",
    color: Color.Black,
    boardSquareId: "G7",
    movement: Movement.Pawn,
    value: 1,
    hasMoved: false,
    enPassantable: false,
}

export const blackPawn8: IPawn = {
    id: "wp8",
    name: "Black Pawn 8",
    color: Color.Black,
    boardSquareId: "H7",
    movement: Movement.Pawn,
    value: 1,
    hasMoved: false,
    enPassantable: false,
}