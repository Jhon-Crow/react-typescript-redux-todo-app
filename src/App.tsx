import './App.css'
import TodoList from "./components/todoList/todoList.tsx";
import TodoForm from "./components/todoForm/todoForm.tsx";
import DeleteModal from "./components/deleteModal/deleteModal.tsx";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteTodo} from "./store/todoSlice.ts";

function App() {
    const dispatch = useDispatch();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [todoToDelete, setTodoToDelete] = useState<string | null>(null);

    const todosArr = useSelector(state => state.todos.todosArr)

    function updateTodo() {

    }



    const deleteTodoHandler = () => dispatch(deleteTodo(todoToDelete));

  return (
    <>
      <DeleteModal deleteTodo={deleteTodoHandler}isOpen={isOpenModal} setIsOpen={setIsOpenModal}/>
      <TodoForm updateTodo={updateTodo}/>
      <TodoList todosArr={todosArr} setTodoToDelete={setTodoToDelete} updateTodo={updateTodo} setIsOpenModal={setIsOpenModal}/>
    </>
  )
}

export default App
