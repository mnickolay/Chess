import { IBoardSquare } from "../board";

export enum Color {
    Black,
    White,
}

export enum Movement {
    Pawn,
    Rook,
    Knight,
    Bishop,
    Queen,
    King,
}

export interface IPiece {
    id: string;
    name: string;
    color: Color;
    boardSquare?: IBoardSquare;
    movement: Movement;
    value: number;
    controlling?: IBoardSquare;
}

export * from "./rook";
export * from "./knight";
export * from "./bishop";
export * from "./queen";
export * from "./king";
export * from "./pawn";
