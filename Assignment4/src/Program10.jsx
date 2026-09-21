import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

const TaskContext = createContext();

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log("Tasks updated:", tasks);
  }, [tasks]);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}

function AddTask() {
  const [task, setTask] = useState("");
  const { addTask } = useContext(TaskContext);

  function handleSubmit(e) {
    e.preventDefault();

    if (task.trim() !== "") {
      addTask(task);
      setTask("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

function TaskList() {
  const { tasks, deleteTask } = useContext(TaskContext);

  return (
    <div>
      <h3>Task List</h3>

      {tasks.length === 0 ? (
        <p>No tasks added.</p>
      ) : (
        tasks.map((task, index) => (
          <div key={index}>
            <p>
              {task}

              <button onClick={() => deleteTask(index)}>
                Delete
              </button>
            </p>
          </div>
        ))
      )}
    </div>
  );
}

function Program10() {
  return (
    <TaskProvider>
      <div>
        <h2>Program 10 - Task Management</h2>

        <AddTask />

        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default Program10;