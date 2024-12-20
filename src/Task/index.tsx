
import React from "react";
import { ITaskProps } from "./types";

const Task = ({ task, toggleTask, deleteTask }: ITaskProps) => {
    return (
        <li
            style={{
                display: 'flex',
                gap: '5px',
            }}
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
                style={{
                    cursor: 'pointer',
                    color: 'red',
                    fontWeight: 'bold'
                }}
            >✕</span>
        </li>
    );
}

export default Task;