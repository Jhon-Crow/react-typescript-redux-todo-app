import Button from "@mui/material/Button";

interface ModalProps {
    header?: string;
    isOpen: boolean;
    setIsOpen: (arg: boolean) => void;
    onOkCallback: () => void;
}

const Dialogue = (props: ModalProps) => {
    const {isOpen, setIsOpen, onOkCallback, header} = props;
    const closeDialogue = () => setIsOpen(false);

    const onClickHandler = () => {
        onOkCallback();
        closeDialogue();
    }

    return isOpen && (
        <div>
            {header && <h1>{header}</h1>}
            <Button variant='contained' color="success" onClick={onClickHandler}>ok</Button>
            <Button variant="outlined" color="error" onClick={closeDialogue}>cancel</Button>
        </div>
    );
};

export default Dialogue;