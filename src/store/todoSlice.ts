import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface TodoStateItem {
    id: string;
    text: string;
    checked: boolean;
}

const initialState = {
    todosArr: [
        {id: '1', text: 'todo1', checked: false},
        {id: '2', text: 'todo2', checked: false},
        {id: '3', text: 'todo3', checked: true},
    ] as TodoStateItem[]
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        createTodo(state, action: PayloadAction<string>) {
            state.todosArr.push({
                id: String(Date.now()),
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
    }
})

export const { createTodo, updateTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;