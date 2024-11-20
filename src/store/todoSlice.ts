import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface TodoItem {
    id: string;
    text: string;
    checked: boolean;
}

const initialState = {
    todosArr: [] as TodoItem[]
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        createTodo(state, action: PayloadAction<{ text: string }>) {
            console.log(state)
            console.log(action)
            state.todosArr.push({
                id: String(Date.now()),
                text: action.payload.text,
                checked: false,
            });
        },
        updateTodo(state, action) {},
        getTodosArr(state, action) {},
        toggleTodo(state, action) {},
        deleteTodo(state, action) {},
    }
})

export const { createTodo, updateTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;