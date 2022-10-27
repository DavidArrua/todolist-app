import TaskList from './TaskList'
import TaskForm from './TaskForm'
import { tasks as data } from "./tasks";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask (title){
    setTasks([...tasks, {
      name : title,
      id : tasks.length,
      description : "holiss"
    } ])
  }

  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks}/>
    </>
  )
}

export default App