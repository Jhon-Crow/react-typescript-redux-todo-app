import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LOCAL_STORAGE_TODOS} from "../shared/consts/localstorage.ts";

export interface TodoStateItem {
    id: string;
    text: string;
    checked: boolean;
}

const loadToDos = localStorage.getItem(LOCAL_STORAGE_TODOS);


const initialState = {
    todosArr: loadToDos
        ? JSON.parse(loadToDos) as TodoStateItem[]
        : [] as TodoStateItem[]
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        createTodo(state, action: PayloadAction<string>) {
            state.todosArr.push({
                id: String(crypto.randomUUID()),
                text: action.payload,
                checked: false,
            });
        },
        updateTodo(state, action: PayloadAction<{ id:string, text: string }>) {
            const { id, text } = action.payload;
            const todo = state.todosArr.find(todo => todo.id === id);
            if (todo && todo.text !== text) {
                todo.text = text;
            }
        },
        toggleTodo(state, action: PayloadAction<{id: string, checked: boolean }>) {
            const { id, checked } = action.payload;
            const todo = state.todosArr.find(todo => todo.id === id);
                if (todo) {
                    todo.checked = !checked;
                }
        },
        deleteTodo(state, action: PayloadAction<string | null>) {
            state.todosArr = state.todosArr.filter(i => i.id !== action.payload);
        },
        saveTodos: (state) => {
            const saveTodos = JSON.stringify(state.todosArr);
            localStorage.setItem(LOCAL_STORAGE_TODOS, saveTodos);
        }
    }
})

export const {
    createTodo,
    updateTodo,
    toggleTodo,
    deleteTodo ,
    saveTodos
} = todoSlice.actions;

export default todoSlice.reducer;