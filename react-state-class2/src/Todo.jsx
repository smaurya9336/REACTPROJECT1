import { useState } from "react"
import { v4 as uuidv4} from 'uuid';
export default function Todo(){
   let [todos, setTodos] = useState([{task: "sample task", id: uuidv4(), isDone: false}]);
   let [newTodo, setNewTodo] = useState("");

   let addNewTask = () =>{
    setTodos((prevTodos) =>{
        return [...prevTodos, {task: newTodo, id: uuidv4(), isDone: false }]
    });
    setNewTodo("");
   }

   let updateTodoValue = (event) =>{
      setNewTodo(event.target.value);
   } 

   let deleteTodo = (id) =>{
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
   }

   let markAsDoneAll = () =>{
    setTodos( (prevTodos) =>
        prevTodos.map((todo) => {
            return {
                ...todo,
               isDone:true,
            };
        })
    );
   };

   let markAsDone =(id) =>{
    setTodos( (prevTodos) =>
        prevTodos.map((todo) => {
            if(todo.id == id){
                return {
                    ...todo,
                   isDone:true,

                };
            }else{
                return todo;
            }
           
        })
    );
   }

    return(
        <div className="main">
            <input type="text" 
            value={newTodo} 
            placeholder="add a task" 
             onChange={updateTodoValue}
             />
         <br />  <br />
          <button onClick={addNewTask}>Add Task</button>
            <br />
         
           
            <h4>Todo list</h4>
            <ul>
                {todos.map((todo) =>(
                        <li key={todo.id}>
                            <span style={todo.isDone ? {textDecoration: "line-through"} : {} }>{todo.task}</span>
                            &nbsp; &nbsp; &nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>delete</button>
                            <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                            </li>
                    ))
                }
            </ul>
            <button onClick={markAsDoneAll}>Mark Done All</button>
        </div>
    )
}