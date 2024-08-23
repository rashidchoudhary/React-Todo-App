import React from 'react';
import { Typography, AppBar, Toolbar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddTodo from '../todoComponents/AddTodo.jsx';
import TodoList from '../todoComponents/TodoList.jsx';

const Home = () => {
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login');
        }
    }, [navigate]);

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="App">
            <AppBar>
                <Toolbar>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Typography variant="h6" color="inherit">
                            Todo App
                        </Typography>
                        <Button onClick={logout} style={{ color: 'white', border: '1px solid white' }}>
                            Logout
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
            <div style={{ marginTop: '90px' }} />
            <Typography variant="h5" color="white">
                My Todo App
            </Typography>
            <AddTodo />
            <TodoList />
        </div>
    );
};

export default Home;
