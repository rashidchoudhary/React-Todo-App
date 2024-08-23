import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo } from '../redux/app/todSlice.js';

const EditTodo = ({ id }) => {
    const todo = useSelector((state) =>
        state.todos.find((t) => t.id === id)
    );
    const [taskName, setTaskName] = useState(todo.taskName);
    const [status, setStatus] = useState(todo.status);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editTodo({
            id,
            taskName,
            status,
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Task Name"
                required
            />
            <label>
                <input
                    type="checkbox"
                    checked={status}
                    onChange={() => setStatus(!status)}
                />
                Completed
            </label>
            <button type="submit">Edit Task</button>
        </form>
    );
};

export default EditTodo;
