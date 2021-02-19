import React, {useState} from 'react'
import TodoForm from "./TodoForm";
function TodoList() {
    const [todos, setTodos] = useState([]);

    //add item
    const addTodo = todo => {
        //jodi ami space dei tahole print hobena ebong majhkhane space dile print hbe
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodo = [todo, ...todos]
        setTodos(newTodo)
    }
    return (
        <div>
            <h1>Add Your Task</h1>
            <TodoForm onSubmit={addTodo} />
        </div>
    )
}

export default TodoList;    
