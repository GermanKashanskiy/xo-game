import { BoardData } from './BoardData';
import { winCombinations } from './WinCombinations';

export const calculateWinner = (boardData: BoardData): number | null => {
    for (const combination of winCombinations) {
        const [a, b, c] = combination;
        const playerA = boardData.cellData[a].player;
        const playerB = boardData.cellData[b].player;
        const playerC = boardData.cellData[c].player;

        if (playerA === 'X' && playerA === playerB && playerB === playerC) {
            return 1;
        } else if (playerA === 'O' && playerA === playerB && playerB === playerC) {
            return 2;
        }
    }

    return null;
};
