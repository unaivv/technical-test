import { ITask } from "../types";

export interface ITaskProps {
    task: ITask;
    toggleTask: (taskId: number) => void;
    deleteTask: (taskId: number, e: React.MouseEvent<HTMLSpanElement, MouseEvent>
    ) => void;
}