import './App.css';
import { ToDoList } from './components/todolist'

function App() {
  const toDos = [
    {index: 1, name: "Task 1"},
    {index: 2, name: "Task 2"},
    {index: 3, name: "Task 3"},
    {index: 4, name: "Task 4"},
  ]

  return (
    <ToDoList toDos={toDos}/>
  );
}

export default App;
