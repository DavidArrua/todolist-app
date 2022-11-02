import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div key={task.id} className="card_ d-flex flex-column justify-content-around align-items-centerr">
      <h1 className="fs-3 ms-2">{task.name}</h1>
      <p className="ms-2">{task.description}</p>
      <button className="btn btn-primary ms-2 me-2 mb-1" onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
    </div>
  );
}

export default TaskCard;
