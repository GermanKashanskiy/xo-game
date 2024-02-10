import React, { FC, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface WinnerAllertProps {
    onClose: () => void;
    winner: number | null;
    boardClear: () => void;
}

const WinnerAllert: FC<WinnerAllertProps> = ({ onClose, winner, boardClear }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (winner !== null) {
            setOpen(true);
        }
    }, [winner]);

    const handleClose = () => {
        boardClear();
        setOpen(false);
        onClose();
    };

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {`Player ${winner} win!`}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Congratulations! You are the winner!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default WinnerAllert;
