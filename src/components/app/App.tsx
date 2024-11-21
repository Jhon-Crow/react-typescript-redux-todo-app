import TodoList from "../widgets/todoList/TodoList.tsx";
import TodoForm from "../widgets/todoForm/TodoForm.tsx";
import Dialogue from "../features/Dialogue/Dialogue.tsx";
import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {deleteTodo} from "../../store/todoSlice.ts";
import {Box, CssBaseline} from "@mui/material";

function App() {
    const dispatch = useDispatch();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [todoToDelete, setTodoToDelete] = useState<string | null>(null);


    const deleteTodoHandler = useCallback(() => {
        if (todoToDelete) {
            dispatch(deleteTodo(todoToDelete));
        }
    }, [dispatch, todoToDelete]);

  return (
    <Box
        display="flex"
        justifyContent="start"
        alignItems="center"
        minHeight="100vh"
        flexDirection="column"
        marginTop={4}
        gap={3}
    >
      <CssBaseline/>
      <Dialogue header='Delete todo item?' onAcceptCallback={deleteTodoHandler} isOpen={isOpenModal} setIsOpen={setIsOpenModal}/>
      <TodoForm/>
      <TodoList setTodoToDelete={setTodoToDelete} setIsOpenModal={setIsOpenModal}/>
    </Box>
  )
}

export default App
