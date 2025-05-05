import React, { useState } from 'react';
import Cell from '../components/to-do-list-components/Cell';
import Plus from '../assets/plus.svg';
import todoData from '../data/todos.json';
import { useUser } from '../context/UserContext';

interface TodoProps {
  id: number;
  title: string;
  user: string;
  completed: boolean;
}

const ToDoList = () => {
  const { email } = useUser();
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState<TodoProps[]>(todoData);

  // filter todos by email to get current user todos
  const filteredTodosByEmail = todos.filter((todo) => {
    return todo.user === email;
  });

  // add task (new todos) to our existing data of todos
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      //gets rid of white space to make sure no empty tasks can be passed
      const newTodo: TodoProps = {
        id: Date.now(),
        title: task,
        user: email,
        completed: false,
      };
      // gets all the past todos adds new todos clears task input
      setTodos([...todos, newTodo]);
      setTask('');
    }
  };

  return (
    <div className=" flex max-h-full flex flex-col">
      <div className="font-bold text-5xl font-title mb-10 ">
        Task
        <span className="ml-10 font-thin text-lg text-gray-500">
          {filteredTodosByEmail.length}
        </span>
      </div>
      <form
        onSubmit={handleAdd}
        className="flex mb-0 border-t border-b border-gray-200"
      >
        <button
          type="submit"
          className=" cursor-pointer  text-white px-4 py-2 rounded-r"
        >
          <img src={Plus} alt="add" />
        </button>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-grow  p-2 focus:outline-none "
          placeholder="Enter a task..."
        />
      </form>
      <ul className="h-screen overflow-y-auto scrollbar-custom">
        {filteredTodosByEmail.map((todo, index) => (
          <Cell key={index} item={todo} setTodos={setTodos} data={todos} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
