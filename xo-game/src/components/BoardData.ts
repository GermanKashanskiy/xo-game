export interface CellDataItem {
    player: string;
}

export interface BoardData {
    cellData: CellDataItem[];
    playerId: number;
}

export const initialBoardData: BoardData = {
    cellData: [
        { player: ' ' }, { player: ' ' }, { player: ' ' },
        { player: ' ' }, { player: ' ' }, { player: ' ' },
        { player: ' ' }, { player: ' ' }, { player: ' ' },
    ],
    playerId: 1,
};
