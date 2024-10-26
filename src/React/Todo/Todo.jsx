import React, { useEffect, useState } from "react";

function Todo() {
  const initialDate = new Date();
  const [date, setDate] = useState(initialDate.toLocaleDateString());
  const [time, setTime] = useState(initialDate.toLocaleTimeString());
  const [todo, setTodo] = useState("");
  const [todo2, setTodo2] = useState(() => {
    const storedTodos = localStorage.getItem("todo");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [checkItem, setCheckItem] = useState([]);

  const handleTodoAdd = () => {
    if (todo.trim()) {
      setTodo2((prev) => [...prev, todo]);
      setTodo("");
    }
  };

  const handleCheck = (item) => {
    setCheckItem((prev) =>
      prev.includes(item) ? prev.filter((el) => el !== item) : [...prev, item]
    );
  };

  const handleDelete = (item) => {
    setTodo2((prev) => prev.filter((todoItem) => todoItem !== item));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newDate = new Date();
      setDate(newDate.toLocaleDateString());
      setTime(newDate.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log(todo2);
    localStorage.setItem("todo", JSON.stringify(todo2));
  }, [todo2]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Todo App</h1>
      <p style={{ textAlign: "center" }}>
        {date} - {time}
      </p>
      <div>
        <input
          type="text"
          placeholder="Enter todo"
          style={{ padding: "10px", width: "300px", border: "none" }}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          style={{
            width: "100px",
            height: "36.6px",
            backgroundColor: "orange",
            border: "none",
          }}
          onClick={handleTodoAdd}
        >
          Add
        </button>
        <ul style={{ padding: 0 }}>
          {todo2.map((item, index) => {
            const checked = checkItem.includes(item);
            return (
              <li
                key={index}
                style={{
                  backgroundColor: "white",
                  color: "black",
                  listStyleType: "none",
                  margin: "10px",
                  padding: "10px",
                  textDecoration: checked ? "line-through" : "none",
                }}
              >
                {item}
                <span
                  style={{
                    float: "right",
                    marginLeft: "20px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDelete(item)}
                >
                  X
                </span>
                <span
                  style={{ float: "right", cursor: "pointer" }}
                  onClick={() => handleCheck(item)}
                >
                  check
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
