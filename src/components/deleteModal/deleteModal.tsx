import React, {useState} from 'react';

interface ModalProps {
    isOpen: boolean;
    setIsOpen: (arg: boolean) => void;
}

const DeleteModal = (props: ModalProps) => {
    const {isOpen, setIsOpen} = props;
    const closeModal = () => setIsOpen(false);
    const deleteItem = () => {

        setIsOpen(false);
    };

    // TODO const deleteItem

    return isOpen && (
        <div>
            <h1>Delete todo item?</h1>
            <button onClick={deleteItem}>ok</button>
            <button onClick={closeModal}>cancel</button>
        </div>
    );
};

export default DeleteModal;