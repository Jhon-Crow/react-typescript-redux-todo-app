import TodoItem from "../../entities/todoItem/TodoItem.tsx";
import { useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import { TodoStateItem } from "../../../store/todoSlice.ts";
import { RootState } from "../../../store";
import {memo, useCallback} from "react";

interface TodoListProps {
    setIsOpenModal: (arg: boolean) => void;
    setTodoToDelete: (id: string | null) => void;
}

const TodoList = memo((props: TodoListProps) => {
    const todosArr = useSelector((state: RootState) => state.todos.todosArr);

    const { setIsOpenModal, setTodoToDelete } = props;

    const handleDeleteClick = useCallback((id: string) => {
        setTodoToDelete(id);
        setIsOpenModal(true);
    }, [setTodoToDelete, setIsOpenModal]);

    return todosArr.length
        ? (
        <Stack spacing={1}>
             {todosArr.map((i: TodoStateItem) => (
                <TodoItem
                    key={i.id}
                    id={i.id}
                    text={i.text}
                    checked={i.checked}
                    handleDeleteClick={handleDeleteClick}
                />
            ))}
        </Stack>
    )
        : <h1>it's empty here</h1>;
});

export default TodoList;