import './App.css'
import TodoList from "./components/todoList/todoList.tsx";
import TodoForm from "./components/todoForm/todoForm.tsx";
import DeleteModal from "./components/deleteModal/deleteModal.tsx";
import {useState} from "react";

function App() {

    const [isOpenModal, setIsOpenModal] = useState(false);


    function updateTodo() {

    }

    function deleteTodo() {

    }

  return (
    <>
      <DeleteModal isOpen={isOpenModal} setIsOpen={setIsOpenModal}/>
      <TodoForm/>
      <TodoList updateTodo={updateTodo} setIsOpenModal={setIsOpenModal}/>
    </>
  )
}

export default App
