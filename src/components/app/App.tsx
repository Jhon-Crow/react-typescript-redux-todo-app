import TodoList from "../widgets/todoList/TodoList.tsx";
import TodoForm from "../widgets/todoForm/TodoForm.tsx";
import Dialogue from "../features/Dialogue/Dialogue.tsx";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteTodo} from "../../store/todoSlice.ts";

function App() {
    const dispatch = useDispatch();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [todoToDelete, setTodoToDelete] = useState<string | null>(null);


    const deleteTodoHandler = () => dispatch(deleteTodo(todoToDelete));

  return (
    <>
      <Dialogue header='Delete todo item?' onOkCallback={deleteTodoHandler} isOpen={isOpenModal} setIsOpen={setIsOpenModal}/>
      <TodoForm/>
      <TodoList setTodoToDelete={setTodoToDelete} setIsOpenModal={setIsOpenModal}/>
    </>
  )
}

export default App
