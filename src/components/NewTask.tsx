import { useState } from "react";
import Button from "./Button";

export default function NewTask({ saveTask }: { saveTask: (task: string) => void }) {

    const [task, setTask] = useState<string>("");

    function handleTaskChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTask(event.target.value);
    }

    return <div>
        <input type="text" placeholder="Task title"
            className="w-64 px-2 py-1 border border-stone-300 rounded-sm mr-2"
            onChange={handleTaskChange}
            value={task}
        />
        <Button onClick={() => saveTask(task)}>Add Task</Button>
    </div>
}