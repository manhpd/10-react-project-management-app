import { IProject } from "../model/project.model";
import Button from "./Button";

export default function SideBar({ onStartAddProject, projects, selectProject }: { onStartAddProject: () => void, projects: IProject[], selectProject: (project: IProject) => void }) {
    
    const handleAddProject = () => {
        onStartAddProject();
    }

    const handelSelect = (project: IProject) => {
        selectProject(project);
    }

    return (
        <aside className="w-1/3 px-8 h-screen py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
            <div>
                <Button onClick={handleAddProject} >+ Add project</Button>
            </div>
            <ul className="mt-8">
                {projects.map((project, index) => (
                    <li key={index} className="my-4">
                        <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800" onClick={() => handelSelect(project)} >{project.title}</button>
                    </li>
                ))}
            </ul>
        </aside>
    );
}