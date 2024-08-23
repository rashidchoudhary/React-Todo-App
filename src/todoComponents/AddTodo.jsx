import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/app/todSlice.js';
import { TextField, Checkbox, FormControlLabel, Button, Box, Typography, Paper } from '@mui/material';

const AddTodo = () => {
    const [taskName, setTaskName] = useState('');
    const [status, setStatus] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({
            taskName,
            status,
        }));
        setTaskName('');
    };

    return (
        <Paper elevation={3} sx={{ padding: 3, maxWidth: 400, margin: 'auto', marginTop: 5 }}>
            <Typography variant="h5" align="center" gutterBottom>
                Add New Task
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
                <TextField
                    label="Task Name"
                    variant="outlined"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    required
                    fullWidth
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={status}
                            onChange={() => setStatus(!status)}
                            color="primary"
                        />
                    }
                    label="Completed"
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{ marginTop: 2 }}
                    fullWidth
                >
                    Add Task
                </Button>
            </Box>
        </Paper>
    );
};

export default AddTodo;
