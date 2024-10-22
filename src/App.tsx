import React, { ReactNode, useState } from "react";
import NewProject from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";
import { IProject } from "./model/project.model";
import SelectedProject from "./components/SelectedProject";
import { JSX } from "react/jsx-runtime";

function App() {
  const [projectsState, setProjectsState] = useState<{
    selectedProjectId: string | null | undefined;
    projects: any[];
  }>({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: null
    })
    )
  }

  function handelCancel() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    }
    )
  }

  const handelSave = (newProject: IProject) => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    }
    );
  }

  function handelSelectProject(project: IProject) {
    console.log(project);
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: project.id
      }
    });
  }

  const handelDeleteProject = (id: string) => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id !== id)
      }
    });
  }

  const handeSaveNewTask = (task: string) => {
    setProjectsState(prevState => {
      const project = prevState.projects.find(project => project.id === prevState.selectedProjectId);
      project.tasks.push(task);
      return {
        ...prevState,
        projects: [...prevState.projects]
      }
    });
  }

  let content: ReactNode;
  console.log(projectsState.selectedProjectId);
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onCancel={handelCancel} saveProject={handelSave} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else {
    const project = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
    content = <SelectedProject project={project} deleteProject={() => handelDeleteProject(project.id)} saveNewTask={handeSaveNewTask}/>;
  }

 
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartAddProject={handleStartAddProject} projects={projectsState.projects} selectProject={handelSelectProject} />
      {content}
      {/* <NewProject /> */}
    </main>
  );
}

export default App;
