import React, { useCallback, useEffect, useState } from 'react';
import { ITask } from './types';
import Task from '../Task';

import styles from './styles.module.css';

const TodoList: React.FC = () => {
	const [tasks, setTasks] = useState<ITask[]>(() => {
		const savedTasks = localStorage.getItem('tasks');
		return savedTasks ? JSON.parse(savedTasks) : [];
	});
	const [newTask, setNewTask] = useState('');

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	const addTask = useCallback(() => {
		if (newTask.trim() === '') return;
		const updatedTasks = [...tasks, { id: tasks.length, text: newTask, completed: false }];
		setTasks(updatedTasks);
		setNewTask('');
	}, [newTask, tasks]);

	const toggleTask = useCallback((taskId: number) => {
		const updatedTasks = tasks.map((task) => {
			if (task.id === taskId) {
				return { ...task, completed: !task.completed };
			}
			return task;
		});
		setTasks(updatedTasks);
	}, [tasks]);

	const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setNewTask(event.target.value);
	}, []);

	const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTask();
        }
    }, [addTask]);

	const deleteTask = useCallback((taskId: number, e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.stopPropagation();
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    }, [tasks]);

	const renderTasks = () => {
		if (tasks.length === 0) {
			return <li>No tasks</li>;
		}
		return tasks.map((task) => (
			<Task
				key={task.id}
				task={task}
				toggleTask={toggleTask}
				deleteTask={deleteTask}
			/>
		));
	}

	return (
		<div className={styles.taskList}>
			<input
				type="text"
				value={newTask}
				onChange={handleInputChange}
				onKeyDown={handleKeyDown}
				aria-label="New task"
			/>
			<button onClick={addTask}>Add Task</button>
			<ul className={styles.list}>
				{
					renderTasks()
				}
			</ul>
		</div>
	);
};

export default TodoList;