import { IBoardSquare } from "..";
import { rowOne, rowTwo, rowThree, rowFour, rowFive, rowSix, rowSeven, rowEight } from ".";

export interface IRow {
    rowSquares: IBoardSquare[];
}

export const rowsArr: IRow[] = [
    rowOne,
    rowTwo,
    rowThree,
    rowFour,
    rowFive,
    rowSix,
    rowSeven,
    rowEight,
]

export * from "./one";
export * from "./two";
export * from "./three";
export * from "./four";
export * from "./five";
export * from "./six";
export * from "./seven";
export * from "./eight";