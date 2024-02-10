import { FC, useState, useEffect } from "react";
import { calculateWinner } from './Winner';
import { WinnerData, initialWinnerData, winnerData } from "./WinnerData";
import Btn from './Btn';
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { BoardData, initialBoardData } from './BoardData';
import Button from '@mui/material/Button';
import WinnersResults from './WinnersResults';
import WinnerAllert from "./WinnerAllert";



const AddBoard: FC = () => {
    /* setBoardData({
        ...boardData, 
        cellData: constant with list of cels ---| const tempCellData = [...boardData.cellData]; |---, 
        playerId: Id of player who need to make new choose 1 - X, 2 - O }) */
    const [boardData, setBoardData] = useState<BoardData>(initialBoardData);

    // Disable-/-Enable of board cells after click
    const [disabledButtons, setDisabledButtons] = useState(Array(9).fill(false));

    // Winner check
    const [winner, setWinner] = useState<number | null>(null);

    // Ammount of wins
    const [localWinnerData, setLocalWinnerData] = useState<WinnerData>({ ...winnerData });

    // Winner Allert
    const [isWinnerAlertOpen, setIsWinnerAlertOpen] = useState(false);


    // Set Players choose on board
    const setCellCommand = (index: number) => {
        const updatedCellData = [...boardData.cellData];
        if (boardData.playerId === 1) {
            updatedCellData[index].player = 'X';
        } else if (boardData.playerId === 2) {
            updatedCellData[index].player = 'O';
        }
        setBoardData({
            ...boardData,
            cellData: updatedCellData,
            playerId: boardData.playerId === 1 ? 2 : 1,
        });
    };


    // Multi onClick
    const handleBtnClick = (index: number, playerId: number) => {
        if (!disabledButtons[index]) {
            setCellCommand(index);
            setDisabledButtons(prevState => {
                const newState = [...prevState];
                newState[index] = true;
                return newState;
            });
        }
    };


    // Clear game from board
    const boardClear = () => {
        const clearedCellData = initialBoardData.cellData.map(() => ({ player: " " }));

        setBoardData({
            ...boardData,
            cellData: clearedCellData,
            playerId: 1,
        });

        setDisabledButtons(Array(9).fill(false));
        setWinner(null);
    };


    // Update winner result
    useEffect(() => {
        const winnerResult = calculateWinner(boardData);
        setWinner(winnerResult);

        if (winnerResult !== null) {
            setLocalWinnerData(prevData => ({
                ...prevData,
                player1: winnerResult === 1 ? prevData.player1 + 1 : prevData.player1,
                player2: winnerResult === 2 ? prevData.player2 + 1 : prevData.player2,
            }));
            setDisabledButtons(Array(9).fill(true));
            setIsWinnerAlertOpen(true);
        }
    }, [boardData]);

    const handleWinnerAlertClose = () => {
        setIsWinnerAlertOpen(false);
    };


    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': { m: 0 },
            }}
        >
            <WinnersResults winnerData={localWinnerData} />

            {winner && (<WinnerAllert
                onClose={() => setWinner(null)} winner={winner} boardClear={boardClear} />
            )}

            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Btn updatedText={boardData.cellData[0]?.player} playerId={boardData.playerId} onClick={() => handleBtnClick(0, boardData.playerId)} disabled={disabledButtons[0]} />
                <Btn updatedText={boardData.cellData[1]?.player} playerId={boardData.playerId} onClick={() => handleBtnClick(1, boardData.playerId)} disabled={disabledButtons[1]} />
                <Btn updatedText={boardData.cellData[2]?.player} playerId={boardData.playerId} onClick={() => handleBtnClick(2, boardData.playerId)} disabled={disabledButtons[2]} />
            </ButtonGroup>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Btn updatedText={boardData.cellData[3]?.player} playerId={boardData.playerId} onClick={() => handleBtnClick(3, boardData.playerId)} disabled={disabledButtons[3]} />
                <Btn updatedText={boardData.cellData[4]?.player} playerId={boardData.playerId} onClick={() => handleBtnClick(4, boardData.playerId)} disabled={disabledButtons[4]} />
                <Btn updatedText={boardData.cellData[5]?.player} playerId={boardData.playerId} onClick={() => handleBtnClick(5, boardData.playerId)} disabled={disabledButtons[5]} />
            </ButtonGroup>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Btn updatedText={boardData.cellData[6]?.player} playerId={boardData.playerId} onClick={() => handleBtnClick(6, boardData.playerId)} disabled={disabledButtons[6]} />
                <Btn updatedText={boardData.cellData[7]?.player} playerId={boardData.playerId} onClick={() => handleBtnClick(7, boardData.playerId)} disabled={disabledButtons[7]} />
                <Btn updatedText={boardData.cellData[8]?.player} playerId={boardData.playerId} onClick={() => handleBtnClick(8, boardData.playerId)} disabled={disabledButtons[8]} />
            </ButtonGroup>

            <Button variant="contained" style={{ marginTop: "30px", backgroundColor: "#FBFBFB", color: "black" }} onClick={boardClear}>Clear Board</Button>
        </Box>
    );
};

export default AddBoard;