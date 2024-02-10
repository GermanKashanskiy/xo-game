import React, { FC } from "react";
import { WinnerData } from "./WinnerData";

interface WinnersResultsProps {
    winnerData: WinnerData;
}

const WinnersResults: FC<WinnersResultsProps> = ({ winnerData }) => {
    return (
        <div>Player 1 - X: {winnerData.player1} Player 2 - O: {winnerData.player2}</div>
    );
};

export default WinnersResults;