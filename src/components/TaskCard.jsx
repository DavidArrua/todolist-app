function TaskCard({task}) {
  return (
    <div key={task.id}>
      <h1>{task.name}</h1>
      <p>{task.description}</p>
    </div>
  );
}

export default TaskCard;