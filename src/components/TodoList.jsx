import React from "react";
import InputForm from "./InputForm";
import { db } from "../config/firebase";

const TodoList = () => {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleCheckBoxChange = (event, id) => {
    db.collection("todo")
      .doc(id)
      .update({ isComplete: !!event.target.checked });
  };

  const handleDelete = (id) => {
    db.collection("todo").doc(id).delete();
  };

  React.useEffect(() => {
    db.collection("todo")
      .get()
      .then((querySnapshot) => {
        let data = [];
        querySnapshot.docs.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setTodos(data);
      });
    db.collection("todo").onSnapshot((querySnapshot) => {
      let data = [];
      querySnapshot.docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setTodos(data);
    });
  }, []);

  return (
    <div>
      <InputForm addTodo={addTodo} />
      <div className="flex flex-col items-start p-5">
        {todos.map((todo) => (
          <div key={todo.id} className={todo.isComplete ? "line-through" : ""}>
            <input
              className="mr-2"
              type="checkbox"
              checked={todo.isComplete}
              onChange={(event) => handleCheckBoxChange(event, todo.id)}
            />
            {todo.title}
            <span
              className="px-2 cursor-pointer"
              onClick={() => handleDelete(todo.id)}
            >
              &times;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
