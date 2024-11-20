import React from 'react';

interface TodoItemProps {
    id: string;
    text: string;
    checked: boolean;
    updateTodo: () => void;
    handleDeleteClick: (id: string) => void;
}

const TodoItem = (props: TodoItemProps) => {
    const {id, text, checked, updateTodo, handleDeleteClick} = props;
    return (
        <li>
            <input onChange={updateTodo} checked={checked} type="checkbox"/>
            <input type="text" value={text}/>
            <button onClick={() => handleDeleteClick(id)}>delete</button>
        </li>
    );
};

export default TodoItem;