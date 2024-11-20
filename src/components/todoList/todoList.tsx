import React from 'react';
import TodoItem from "../todoItem/todoItem.tsx";

interface TodoListProps {
    // TODO тут вероятно нужно получать event от кнопки
    setIsOpenModal: (arg: boolean) => void;
    updateTodo: () => void;
}

const TodoList = (props: TodoListProps) => {
    const {setIsOpenModal, updateTodo} = props;
    // TODO получать аррэй из стэйта
    const todosArr = [
        {id: 1, text: 'todo1', checked: false},
        {id: 2, text: 'todo2', checked: false},
        {id: 3, text: 'todo3', checked: true},
    ]

    const openDeleteModal = () => setIsOpenModal(true);

    // TODO передать openDeleteModal

    return (
        <ul>
            {todosArr.map(i => <TodoItem text={i.text} checked={i.checked} openDeleteModal={openDeleteModal} updateTodo={updateTodo} />)}
        </ul>
    );
};

export default TodoList;