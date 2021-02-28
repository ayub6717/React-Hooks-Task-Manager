import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from "./TodoForm";
function TodoList() {
    const [todos, setTodos] = useState([]);

    //add item
    const addTodo = todo => {
        //jodi ami space dei tahole print hobena ebong majhkhane space dile print hbe
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodo = [todo, ...todos];
        setTodos(newTodo);
        console.log(...todos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
          return;
        }
    
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
      };

    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
    
        setTodos(removedArr);
      };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
          if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
          }
          return todo;
        });
        setTodos(updatedTodos);
      };
    return (
        <div>
            <h1>Add Your Task</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo 
                todos={todos} 
                completeTodo = {completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    )
}

export default TodoList;    
