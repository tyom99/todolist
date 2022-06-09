import './App.css';
import {useEffect, useState} from "react";
import TodoList from "./TodoList/TodoList";
import TodoForm from "./TodoForm/TodoForm";
import TodoFooter from "./TodoFooter/TodoFooter";

function App() {

    const [todos,setTodos] = useState( ()=>{
            const saved = localStorage.getItem("tasks");
            const initialValue = JSON.parse(saved);
        return initialValue || [];
      }
  )

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(todos))
  },[todos])


  return (
    <div className="TodoMainWrapper">
        <div className="TodoTitle">To&nbsp;Do</div>
            <div className="UpperContainer">
      <TodoList
          todos = {todos}
          onDelete={(todo)=>{
            setTodos(todos.filter((t)=>t.id !== todo.id))
          }}
          onChange={(newTodo) => {
              setTodos(todos.map((todo)=>{
                  if(todo.id === newTodo.id) {
                      return newTodo
                  }
                  return todo
              }))
            }
          }
      />
    </div>
        <div className="FooterContainer">
        <TodoForm onAdd={(text)=>{
            setTodos([
                ...todos,
                {
                    id:Math.random(),
                    text: text,
                    isCompleted: false
                }
            ])
        }}/>
        <TodoFooter todos={todos}/>
        </div>
    </div>
  );
}

export default App;
