import { IBoardSquare } from "../board";
import { whitePawn1, whitePawn2, whitePawn3, whitePawn4, whitePawn5, whitePawn6, whitePawn7, whitePawn8,
        whiteRook1, whiteKnight1, whiteBishop1, whiteQueen, whiteKing, whiteBishop2, whiteKnight2, whiteRook2,
        blackPawn1, blackPawn2, blackPawn3, blackPawn4, blackPawn5, blackPawn6, blackPawn7, blackPawn8,
        blackRook1, blackKnight1, blackBishop1, blackQueen, blackKing, blackBishop2, blackKnight2, blackRook2, } from ".";

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
    boardSquareId?: string;
    movement: Movement;
    value: number;
    controlling?: IBoardSquare;
}

export const whitePieces: IPiece[] = [
    whitePawn1, whitePawn2, whitePawn3, whitePawn4, whitePawn5, whitePawn6, whitePawn7, whitePawn8,
    whiteRook1, whiteKnight1, whiteBishop1, whiteQueen, whiteKing, whiteBishop2, whiteKnight2, whiteRook2,
]

export const blackPieces: IPiece[] = [
    blackPawn1, blackPawn2, blackPawn3, blackPawn4, blackPawn5, blackPawn6, blackPawn7, blackPawn8,
    blackRook1, blackKnight1, blackBishop1, blackQueen, blackKing, blackBishop2, blackKnight2, blackRook2,
]

export * from "./rook/rook";
export * from "./knight/knight";
export * from "./bishop/bishop";
export * from "./queen/queen";
export * from "./king/king";
export * from "./pawn/pawn";
