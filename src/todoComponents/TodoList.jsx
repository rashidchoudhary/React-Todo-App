import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from '../redux/app/todSlice.js';
import { Table, Button, Input, Checkbox, Space, Typography } from 'antd';

const { Title } = Typography;

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [editingId, setEditingId] = useState(null);
    const [editedTaskName, setEditedTaskName] = useState('');
    const [editedStatus, setEditedStatus] = useState(false);

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleEdit = (todo) => {
        setEditingId(todo.id);
        setEditedTaskName(todo.taskName);
        setEditedStatus(todo.status);
    };

    const handleSave = (id) => {
        dispatch(editTodo({
            id,
            taskName: editedTaskName,
            status: editedStatus,
        }));
        setEditingId(null);
    };

    const columns = [
        {
            title: 'Task Name',
            dataIndex: 'taskName',
            key: 'taskName',
            render: (_, todo) => (
                editingId === todo.id ? (
                    <Input
                        value={editedTaskName}
                        onChange={(e) => setEditedTaskName(e.target.value)}
                    />
                ) : (
                    todo.taskName
                )
            ),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (_, todo) => (
                editingId === todo.id ? (
                    <Checkbox
                        checked={editedStatus}
                        onChange={(e) => setEditedStatus(e.target.checked)}
                    >
                        Completed
                    </Checkbox>
                ) : (
                    todo.status ? 'Completed' : 'Pending'
                )
            ),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, todo) => (
                editingId === todo.id ? (
                    <Space>
                        <Button type="primary" onClick={() => handleSave(todo.id)}>
                            Save
                        </Button>
                        <Button onClick={() => setEditingId(null)}>
                            Cancel
                        </Button>
                    </Space>
                ) : (
                    <Space>
                        <Button type="link" onClick={() => handleEdit(todo)}>
                            Edit
                        </Button>
                        <Button type="link" danger onClick={() => handleDelete(todo.id)}>
                            Delete
                        </Button>
                    </Space>
                )
            ),
        },
    ];

    return (
        <div>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '20px', color: "white" }}>
                Todo List
            </Title>
            <Table
                columns={columns}
                dataSource={todos.map(todo => ({ ...todo, key: todo.id }))}
                pagination={false}
                bordered
            />
        </div>
    );
};

export default TodoList;
