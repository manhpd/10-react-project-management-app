import NewTask from "./NewTask";

export default function Tasks({ tasks, saveTask }: { tasks: string[], saveTask: (task: string) => void }) {
    let content;

    if (tasks.length > 0) {
        content = <ul>
            {tasks.map(task => <li key={task}>{task}</li>)}
        </ul>
    } else {
        content = <p className="text-stone-800 mb-4">
            No tasks yet. Get started by adding a new task.
        </p>
    }
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask saveTask={saveTask} />

            {content}

        </section>
    )
}