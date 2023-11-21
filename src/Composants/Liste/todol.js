import React, { useState } from 'react';
import './todo.css';
function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [editingTodoId, setEditingTodoId] = useState(null);
    const [editedTodoText, setEditedTodoText] = useState('');
  
    const addTodo = () => {
      if (newTodo.trim() !== '') {
        setTodos([...todos, { id: Date.now(), text: newTodo }]);
        setNewTodo('');
      }
    };
  
    const deleteTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };
  
    const updateTodo = () => {
      if (editedTodoText.trim() !== '') {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === editingTodoId ? { ...todo, text: editedTodoText } : todo
          )
        );
        setEditingTodoId(null);
        setEditedTodoText('');
      }
    };
  
    const startEditingTodo = (id, text) => {
      setEditingTodoId(id);
      setEditedTodoText(text);
    };
  
    const cancelEditingTodo = () => {
      setEditingTodoId(null);
      setEditedTodoText('');
    };
  
    const handleInputChange = (e) => {
      setNewTodo(e.target.value);
    };

    return (
        <div className="App">
          <h1>Todo List</h1>
          <div>
            <input type="text" value={newTodo} onChange={handleInputChange} />
            <button onClick={addTodo}>Add</button>
          </div>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                {editingTodoId === todo.id ? (
                  <>
                    <input
                      type="text"
                      value={editedTodoText}
                      onChange={(e) => setEditedTodoText(e.target.value)}
                    />
                    <button onClick={updateTodo}>Update</button>
                    <button onClick={cancelEditingTodo}>Cancel</button>
                  </>
                ) : (
                  <>
                    {todo.text}
                    <button onClick={() => startEditingTodo(todo.id, todo.text)}>
                      Edit
                    </button>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
    export default TodoApp;
      