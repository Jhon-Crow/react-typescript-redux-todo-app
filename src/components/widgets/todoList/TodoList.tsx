import TodoItem from "../../entities/todoItem/TodoItem.tsx";
import {useSelector} from "react-redux";
import {Stack} from "@mui/material";

interface TodoListProps {
    setIsOpenModal: (arg: boolean) => void;
    updateTodo: () => void;
    setTodoToDelete: (id: string | null) => void;
}

const TodoList = (props: TodoListProps) => {
    const todosArr = useSelector(state => state.todos.todosArr)

    const {setIsOpenModal, setTodoToDelete} = props;

    const handleDeleteClick = (id: string) => {
        setTodoToDelete(id);
        setIsOpenModal(true);
    };

    return (
        <Stack spacing={1}>
            {todosArr.map(i => <TodoItem id={i.id} text={i.text} checked={i.checked} handleDeleteClick={handleDeleteClick}/>)}
        </Stack>
    );
};

export default TodoList;