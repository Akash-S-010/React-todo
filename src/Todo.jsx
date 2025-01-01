import React from "react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoIosDoneAll } from "react-icons/io";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editedId, setEditedId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTodo = () => {
    {task==="" ? alert("Enter your task"): setTodos([...todos, { id: Date.now(), task: task, status: false }])}
    setTask("");

    if (editedId) {
      // Update existing task
      const updatedTask = todos.map((todo) =>
        todo.id === editedId ? { ...todo, task } : todo
      );
      setTodos(updatedTask);
      setEditedId(0);
    } else {
      // Add new task
      setTodos([...todos, { id: Date.now(), task: task, status: false }]);
    }
    setTask("");
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((task) => (task.id == id ? false : true)));
  };

  const taskCompleted = (id) => {
    setTodos(todos.map((task) =>  task.id === id ? { ...task, status: !task.status } : task));
  };

  const editTask = (id) => {
    const editTask = todos.find((task) => task.id === id);
    setTask(editTask.task);
    setEditedId(editTask.id);
  }
  return (
    <>
      <div className="todo-container bg-teal-200 h-screen flex items-center justify-center">
        <div className="todo bg-teal-300 p-10 rounded-lg border-2 border-teal-400">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center text-3xl font-semibold mb-7 ">
              ToDo App
            </h1>
            <input
              type="text"
              placeholder="Enter your task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="w-60 h-10 pl-4 focus:outline-none text-lg"
            />
            <button
              type="submit"
              className=" h-10 px-4 bg-teal-700 hover:bg-teal-900 transition text-white font-semibold rounded-tr-md rounded-br-md"
              onClick={addTodo}
            >
              {editedId ? "Edit Task" : "Add Task"}
            </button>
          </form>

          <div className="task-field w-full mt-7">
            <ul>
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className={`bg-teal-900 w-full h-10 flex items-center justify-between px-4 text-lg font-semibold my-3 rounded-md ${
                    todo.status ? 'line-through text-gray-500' : 'text-white'
                  }`}
                >
                  {todo.task}
                  <span className="flex items-center gap-3">
                    <IoIosDoneAll
                      className="size-8 text-green-300 cursor-pointer"
                      title="Completed"
                      onClick={() => taskCompleted(todo.id)}
                    />
                    <FaEdit onClick={()=> editTask(todo.id)} className="text-blue-200 cursor-pointer" />
                    <MdDelete
                      onClick={() => deleteTask(todo.id)}
                      className="text-red-300 cursor-pointer"
                    />
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
