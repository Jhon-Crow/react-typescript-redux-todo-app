import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import { useCallback, memo } from "react";
import {DialogActions, DialogTitle} from "@mui/material";

interface ModalProps {
    header?: string;
    isOpen: boolean;
    setIsOpen: (arg: boolean) => void;
    onAcceptCallback: () => void;
}

const Dialogue = memo((props: ModalProps) => {
    const { isOpen, setIsOpen, onAcceptCallback, header } = props;

    const closeDialogue = useCallback(() => setIsOpen(false), [setIsOpen]);

    const onClickHandler = useCallback(() => {
        onAcceptCallback();
        closeDialogue();
    }, [onAcceptCallback, closeDialogue]);

    return (
        <Dialog
            onClose={closeDialogue}
            open={isOpen}
            maxWidth="md"
            fullWidth={true}

        >
            {header && <DialogTitle fontSize="large">{header}</DialogTitle>}
            <DialogActions>
                <Button
                    size="medium"
                    variant='contained'
                    color="success"
                    onClick={onClickHandler}
                >
                    ok
                </Button>
                <Button
                    size="medium"
                    variant="outlined"
                    color="error"
                    onClick={closeDialogue}
                >
                    cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
});

export default Dialogue;