import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="d-flex justify-content-around align-items-center vh-100 flex-wrap">
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
