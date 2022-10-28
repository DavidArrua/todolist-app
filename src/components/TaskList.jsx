import TaskCard from './TaskCard'

function TaskList(props) {
  
  if(props.tasks.length === 0){
    return <h1>No tienes tareas</h1>
  }

  return (
    <div>
      {props.tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={props.deleteTask}/>
      ))}
    </div>
  );
}

export default TaskList;
