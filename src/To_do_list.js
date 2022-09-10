import React from "react";
import "./App.css";

const To_do_list = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  
 
  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id:new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }
  
  function deleteTodo(id) {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }
 return (
    <div className = "title">
     <p className = "mylist">To do list</p>
      <div className ="list ">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button className = "add-but" onClick={handleSubmit} type="submit"
         disabled = {!todo.length}>Add Todo</button>
      </form>
	  <ul>
    {todos.map((todo) =>
      <li key={todo.id}>
       {todo.text}
 

          <button className = "delete-but" onClick={() => deleteTodo(todo.id)}>X</button>
         </li>   
    
      
      )
}
	  </ul>
    </div>
    </div>
  );
};

export default To_do_list;