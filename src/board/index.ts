import { IPiece } from "../pieces";
import { Column } from "./Columns";
import { IRow, rowsArr } from "./row";
import { Row } from "./Rows";

export interface IBoardSquare {
    id: string;
    row: Row;
    column: Column;
    piece?: IPiece;
    controlledBy?: IPiece[];
}

export interface IBoard {
    board: IRow[];
};

export const startingBoard: IBoard = {
    board: rowsArr,
}