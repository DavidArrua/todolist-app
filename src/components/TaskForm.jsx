import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title: title,
      description: description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column gap-4 justify-content-center container"
      >
        <input
          type="text"
          placeholder="Titulo de la tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          placeholder="Descripcion"
          cols="30"
          rows="10"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <div>
          {title == "" || description == ""? (
            <div className="btn btn-danger w-100">Guardar</div>
          ) : (
            <button className="btn btn-primary w-100">Guardar</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
