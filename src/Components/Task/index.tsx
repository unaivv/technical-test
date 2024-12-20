
import React from "react";
import { ITaskProps } from "./types";
import styles from './styles.module.css';

const Task = ({ task, toggleTask, deleteTask }: ITaskProps) => {
    return (
        <li
            className={styles.task}
            onClick={() => toggleTask(task.id)}
        >
            <input
                type="checkbox"
                checked={task.completed}
                readOnly
                aria-label={`Mark ${task.text} as ${task.completed ? 'incomplete' : 'complete'}`}
            />
            <span
                style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                    cursor: 'pointer'
                }}
            >
                {task.text}
            </span>
            <span
                onClick={(e) => deleteTask(task.id, e)}
                className={styles.deleteButton}
            >✕</span>
        </li>
    );
}

export default Task;