import React, { useState } from "react";
import useTodo from "../context/context";

const ListTodo = ({ post }) => {
  const { deleteTodo, updateTodo } = useTodo();
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(post.text);

  const handleSave = () => {
    updateTodo(post.id, editedText);
    setEditMode(false);
  };

  return (
    <div className="bg-gray-950 text-white p-2 flex items-center justify-between rounded mb-2">
      {editMode ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="p-2 bg-gray-700 rounded"
        />
      ) : (
        <span>{post.text}</span>
      )}
      <div className="flex space-x-4">
        <button
          className="bg-red-500 px-4 py-1 text-white rounded hover:bg-red-600"
          onClick={() => deleteTodo(post.id)}
        >
          Delete
        </button>
        <button
        className={`${editMode ? "bg-green-500 px-4 py-1 text-white rounded hover:bg-green-600" : "bg-blue-500 px-4 py-1 text-white rounded hover:bg-blue-600"}  `}
        onClick={()=>editMode ? handleSave() : setEditMode(pre => !pre)}>
        {editMode ? "Save" : "Edit"}   
        </button>

        {/* {editMode ? (
          <button
            className="bg-green-500 px-4 py-1 text-white rounded hover:bg-green-600"
            onClick={handleSave}
          >
            Save
          </button>
        ) : (
          <button
            className="bg-blue-500 px-4 py-1 text-white rounded hover:bg-blue-600"
            onClick={handleEdit}
          >
            Edit
          </button>
        )} */}
      </div>
    </div>
  );
};

export default ListTodo;
