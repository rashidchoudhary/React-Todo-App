import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: uuidv4(),
                taskName: action.payload.taskName,
                status: action.payload.status,
            });
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        },
        editTodo: (state, action) => {
            const { id, taskName, status } = action.payload;
            const existingTodo = state.find(todo => todo.id === id);
            if (existingTodo) {
                existingTodo.taskName = taskName;
                existingTodo.status = status;
            }
        },
    },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
