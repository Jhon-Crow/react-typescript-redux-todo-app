import React, {useState} from 'react';

interface ModalProps {
    isOpen: boolean;
    setIsOpen: (arg: boolean) => void;
    deleteTodo: () => void;
}

const DeleteModal = (props: ModalProps) => {
    const {isOpen, setIsOpen, deleteTodo} = props;
    const closeModal = () => setIsOpen(false);

    const deleteHandler = () => {
        deleteTodo();
        closeModal();
    }

    return isOpen && (
        <div>
            <h1>Delete todo item?</h1>
            <button onClick={deleteHandler}>ok</button>
            <button onClick={closeModal}>cancel</button>
        </div>
    );
};

export default DeleteModal;