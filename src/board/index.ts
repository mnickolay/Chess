import { IPiece } from "../pieces";
import { Column } from "./Columns";
import { Row } from "./Rows";

export interface IBoardSquare {
    id: string;
    row: Row;
    column: Column;
    piece?: IPiece;
    controlledBy?: IPiece[];
}