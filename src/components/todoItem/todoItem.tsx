import React from 'react';

interface TodoItemProps {
    text: string;
    checked: boolean;
    updateTodo: () => void;
    openDeleteModal: () => void;
}

const TodoItem = (props: TodoItemProps) => {
    const {text, checked, updateTodo, openDeleteModal} = props;
    return (
        <li>
            <input onChange={updateTodo} checked={checked} type="checkbox"/>
            <input type="text" value={text}/>
            <button onClick={openDeleteModal}>delete</button>
        </li>
    );
};

export default TodoItem;