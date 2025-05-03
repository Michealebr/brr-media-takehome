import React, { useState } from "react";
import Edit from "../../assets/square-pen.svg";
import Delete from "../../assets/delete.svg";

interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
}

interface CellProps {
  key: number;
  item: TodoProps; // single todo item
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>; // setter for todos state
  data: TodoProps[]; // array of todos
}

const Cell: React.FC<CellProps> = ({ key, data, item, setTodos }) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedText, setEditedText] = useState("");

  // filters new array of ids that doesnt match the id thats being deleted and sets that as todos
  const handleDelete = (id: number) => {
    setTodos(data.filter((todo) => todo.id !== id));
  };
  // map todos see if id the matches if yes = change completed to opposite else keep the todo teh same move onto next
  const toggleComplete = (id: number) => {
    setTodos(
      data.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  // gets the current todo sets its id and title to then be able to edit
  const handleEdit = (todo: TodoProps) => {
    setEditingId(todo.id);
    setEditedText(todo.title);
  };
  // pram of id = current todo -> map todos to find the id we want to change -> updated title to editedText : leave as is
  const handleSave = (id: number) => {
    setTodos(
      data.map((todo) =>
        todo.id === id ? { ...todo, title: editedText } : todo
      )
    );
    // so condition is no longer true after save = no input box
    setEditingId(null);
  };
  // cancel all changes
  const handleCancel = () => {
    // no longer input
    setEditingId(null);
    // clears stored editedText
    setEditedText("");
  };
  return (
    <li
      key={key}
      className="flex justify-between items-start border-b border-gray-200 px-3 py-2 rounded mb-2"
    >
      <div>
        <input
          type="checkbox"
          onChange={() => toggleComplete(item.id)}
          checked={item.completed}
          className=" mr-5 appearance-none h-3 w-3 border border-gray-400 rounded-xs 
         checked:bg-green-500 checked:border-transparent 
         focus:outline-none"
        />

        {editingId === item.id ? (
          // make it a input and have a event that will set edited text whenever something has changed
          <input
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave(item.id);
              if (e.key === "Escape") handleCancel();
            }}
            onBlur={handleCancel}
            className=" focus:outline-none border border-gray-300 rounded px-2 py-1 foc"
            autoFocus
          />
        ) : (
          // else show it as a span (cant be edited)
          <span
            className={`flex-1${item.completed ? "line-through text-gray-500" : ""}`}
            onDoubleClick={() => handleEdit(item)}
          >
            {item.title}
          </span>
        )}
      </div>
      <div className=" flex items-center flex-shrink-0 ">
        <button
          onClick={() => handleEdit(item)}
          className="cursor-pointer mr-4"
        >
          <img className="w-4" src={Edit} alt="edit" />
        </button>
        <button
          onClick={() => handleDelete(item.id)}
          className="cursor-pointer"
        >
          <img className="w-5" src={Delete} alt="delete" />
        </button>
      </div>
    </li>
  );
};

export default Cell;
