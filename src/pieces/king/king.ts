import { Color, IPiece, Movement } from "..";

interface IKing extends IPiece {
    inCheck: boolean;
    hasCastled: boolean;
}

export const whiteKing: IKing = {
    id: "wk",
    name: "White King",
    color: Color.White,
    boardSquareId: "E1",
    movement: Movement.King,
    value: 0,
    inCheck: false,
    hasCastled: false,
}

export const blackKing: IKing = {
    id: "bk",
    name: "Black King",
    color: Color.Black,
    boardSquareId: "E8",
    movement: Movement.King,
    value: 0,
    inCheck: false,
    hasCastled: false,
}
