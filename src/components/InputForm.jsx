import React from "react";
import { db } from "../config/firebase";

const InputForm = (props) => {
  const [todoText, setTodoText] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    db.collection("todo").add({ title: todoText, isCompleted: false });
  };

  return (
    <form className="flex p-5" onSubmit={handleSubmit}>
      <input
        type="text"
        className="outline-none bg-gray-300 px-3 p-1 mr-1"
        placeholder="Add Todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button type="submit" className="bg-blue-300 rounded px-3">
        Add
      </button>
    </form>
  );
};

export default InputForm;
