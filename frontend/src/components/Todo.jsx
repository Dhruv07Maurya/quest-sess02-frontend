import React, { useState } from "react";

const Todo = ({ user, handleCloseModal }) => {
  const [todo, setTodo] = useState({
    title: "", 
    description: "", 
    points: "", 
    date: "", 
    completed: false, 
  });

  const initialTodos = [
    {
      title: "Complete React tutorial",
      description: "Finish learning the basics of React",
      points: "3",
      date: "2024-12-31",
      completed: false,
    },
    {
      title: "Prepare for meeting",
      description: "Prepare slides for tomorrow's meeting",
      points: "5",
      date: "2024-12-30",
      completed: false,
    },
  ];

  const [todos, setTodos] = useState(initialTodos); 

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setTodo({
      ...todo,
      [id]: value,
    });
  };

  const handlePointsChange = (e) => {
    setTodo({
      ...todo,
      points: e.target.value,
    });
  };

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    if (todo.title.trim()) {
      setTodos([...todos, todo]); 
      setTodo({
        title: "",
        description: "",
        points: "",
        date: "",
        completed: false,
      }); 
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, idx) => idx !== index);
    setTodos(updatedTodos);
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-child-container" >
            <button className="close-btn" onClick={handleCloseModal}>
          X
        </button>
        <h3>Assign Todo to <br /> '{user.name}'</h3> 

        <div className="todo-form">
          <form onSubmit={handleTodoSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={todo.title}
                onChange={handleInputChange}
                placeholder="Enter Todo task"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                value={todo.description}
                onChange={handleInputChange}
                placeholder="Enter description"
                required
              />
            </div>
            <div className="form-group">
              <label>Set Virtual Currencies:</label> <br />
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="points"
                    value="1"
                    checked={todo.points === "1"}
                    onChange={handlePointsChange}
                  />
                  1 VC's
                </label>
                <label>
                  <input
                    type="radio"
                    name="points"
                    value="2"
                    checked={todo.points === "2"}
                    onChange={handlePointsChange}
                  />
                  2 VC's
                </label>
                <label>
                  <input
                    type="radio"
                    name="points"
                    value="3"
                    checked={todo.points === "3"}
                    onChange={handlePointsChange}
                  />
                  3 VC's
                </label>
                <label>
                  <input
                    type="radio"
                    name="points"
                    value="4"
                    checked={todo.points === "4"}
                    onChange={handlePointsChange}
                  /> 
                  4 VC's
                </label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                value={todo.date}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Add Todo
            </button>
          </form>
        </div>
        </div>
        


        <div className="todo-assigned">
          <center><h3>Assigned Todos:</h3> </center><br />
          <div className="todo-cards">
            {todos.map((task, index) => (
              <div className="todo-card" key={index}>
                <h5>{task.title}</h5>
                <p className="todo-desc">{task.description}</p>
                <span>Virtual Currencies Assigned: {task.points}</span>
                <span>Date: {task.date}</span>
                <div className="todo-actions">
                  <button
                    onClick={() => handleToggleComplete(index)}
                    className="check-btn"
                  >
                    {task.completed ? "Completed" : "Mark as Completed"}
                  </button>
                  <button
                    onClick={() => handleDeleteTodo(index)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
