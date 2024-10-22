import { IProject } from "../model/project.model";
import Tasks from "./Tasks";

export default function SelectedProject({project, deleteProject, saveNewTask}: {project: IProject, deleteProject: (id: string) => void, saveNewTask: (task: string) => void}, ) {
    const formattedDate = new Date(project.dueDate).toLocaleDateString();

    
    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">
                        {project.title}
                    </h1>
                    <button className="text-stone-600 hover:text-stone-950" onClick={() => deleteProject(project.id)}>Delete</button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <Tasks tasks={project.tasks} saveTask={saveNewTask}/>
        </div>
    )
}