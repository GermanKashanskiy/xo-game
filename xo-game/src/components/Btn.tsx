import React, { FC } from "react";

interface BtnProps {
    updatedText: string;
    playerId: number;
    onClick?: (playerId: number) => void;
    disabled?: boolean;
}

const Btn: FC<BtnProps> = ({ updatedText, playerId, onClick, disabled }) => {
    const handleClick = () => {
        if (onClick && !disabled) {
            onClick(playerId);
        }
    };

    return (
        <button
            onClick={handleClick}
            style={{
                width: "50px",
                height: "50px",
                border: "none",
                backgroundColor: "#FBFBFB",
                boxShadow: "0px 0px 3px 0px #00000094",
                pointerEvents: disabled ? "none" : "auto",
            }}
        >
            {updatedText}
        </button>
    );
};

export default Btn;