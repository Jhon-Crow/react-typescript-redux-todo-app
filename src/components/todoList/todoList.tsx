import React from 'react';
import TodoItem from "../todoItem/todoItem.tsx";
import {TodoStateItem} from "../../store/todoSlice.ts";

interface TodoListProps {
    // TODO тут вероятно нужно получать event от кнопки
    setIsOpenModal: (arg: boolean) => void;
    updateTodo: () => void;
    setTodoToDelete: (id: string | null) => void;
    todosArr: TodoStateItem[];
}

const TodoList = (props: TodoListProps) => {
    const {setIsOpenModal, updateTodo, setTodoToDelete, todosArr} = props;
    // TODO получать аррэй из стэйта
    // const todosArr = [
    //     {id: '1', text: 'todo1', checked: false},
    //     {id: '2', text: 'todo2', checked: false},
    //     {id: '3', text: 'todo3', checked: true},
    // ]


    const handleDeleteClick = (id: string) => {
        console.log(id)
        setTodoToDelete(id);
        setIsOpenModal(true);
    };

    // TODO передать openDeleteModal

    return (
        <ul>
            {todosArr.map(i => <TodoItem id={i.id} text={i.text} checked={i.checked} handleDeleteClick={handleDeleteClick} updateTodo={updateTodo} />)}
        </ul>
    );
};

export default TodoList;