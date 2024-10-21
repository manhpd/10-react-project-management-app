import { useState } from "react";
import NewProject from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";

function App() {
  const [projectsState, setPorjectsState] = useState<{
    selectedProjectId: string | null | undefined;
    projects: any[];
  }>({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setPorjectsState(prevState => ({
      ...prevState,
      selectedProjectId: null
    })
    )
  }

  function handelCancel() {
    setPorjectsState(prevState => ({
      ...prevState,
      selectedProjectId: undefined
    })
    )
  }

  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onCancel={handelCancel} />;
  } else if (projectsState.selectedProjectId) {
    content = <p>Project selected</p>;
  } else {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartAddProject={handleStartAddProject} />
      {content}
      {/* <NewProject /> */}
    </main>
  );
}

export default App;
