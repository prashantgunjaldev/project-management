import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });


  function handleStartProj(){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  };

  function handleSelectProject(id){
    setProjectState(preState =>{
      return {
        ...preState,
        selectedProjectId: id
      }
    });
  }

  function handleAddProject(newProjData) {
    setProjectState(preState =>{
      return {
        ...preState,
        selectedProjectId: undefined,
        projects:[ ...preState.projects, {...newProjData, tasks: [], id: Math.random()} ]
      }
    });
  }
  function handleDeleteProject(id){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(p=> p.id !== id)
      }
    });
  }

  function handleNewTask(task){
    const cloned = {...projectState};
    const i = projectState.projects.findIndex((p)=> p.id === projectState.selectedProjectId);
    cloned.projects[i].tasks.push({task, id: Math.random()});
    setProjectState(cloned);
  }

  function handleDeleteTask(id){
    const cloned = {...projectState};
    const i = projectState.projects.findIndex((p)=> p.id === projectState.selectedProjectId);
    cloned.projects[i].tasks = cloned.projects[i].tasks.filter(t=> t.id !== id);
    setProjectState(cloned);
  }

  function handleCancelAddProj (){
    setProjectState(preState =>{
      return {
        ...preState,
        selectedProjectId: undefined
      }
    });
  }

  let content = '';

  if(projectState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProj}/>;
  }else if(projectState.selectedProjectId === undefined){
    content =<NoProjectSelected onStartAddProj={handleStartProj}/>
  }else{
    const project = projectState.projects.find(p => p.id === projectState.selectedProjectId)
    content =<SelectedProject project={project} 
    onDelete={handleDeleteProject}
    onNewTask={handleNewTask} onDeleteTask={handleDeleteTask}
    />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProj={handleStartProj}
      onProjectSelect={handleSelectProject}
      selectedProjectId={projectState.selectedProjectId}
      projects={projectState.projects}/>
      { content }
      
    </main>
  );
}

export default App;
