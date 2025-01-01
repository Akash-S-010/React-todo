import React from "react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoIosDoneAll } from "react-icons/io";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTodo = () => {
    setTodos([...todos, task]);
    setTask("");
  };
  return (
    <>
      <div className="todo-container bg-background h-screen flex items-center justify-center">
        <div className="todo bg-white p-10 rounded-lg">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center text-3xl font-semibold mb-7 ">
              ToDo App
            </h1>
            <input
              type="text"
              placeholder="Enter your task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="w-60 h-10 pl-4 focus:outline-none text-lg bg-teal-100"
            />
            <button
              type="submit"
              className=" h-10 px-4 bg-teal-700 hover:bg-teal-900 transition text-white font-semibold rounded-tr-md rounded-br-md"
              onClick={addTodo}
            >
              Add Task
            </button>
          </form>

          <div className="task-field w-full mt-7">
            <ul>
              {todos.map((todo, index) => (
                <li
                  key={index}
                  className="bg-task-background w-full h-10 flex items-center justify-between px-4 text-white text-lg font-semibold my-3 rounded-lg"
                >
                  {todo}
                  <span className="flex items-center gap-3">
                    <IoIosDoneAll className="size-8 text-green-300 cursor-pointer" title="Completed"/>
                    <FaEdit  className="text-blue-900 cursor-pointer"/>
                    <MdDelete className="text-red-700 cursor-pointer" />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
