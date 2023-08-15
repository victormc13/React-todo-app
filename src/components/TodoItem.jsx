import styles from "@/styles/TodoItem.module.css";
import { useState, useRef } from "react";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {
  const editInputRef = useRef(null);
  const [editing, setEditing] = useState(false);

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setUpdate(editInputRef.current.value, itemProp.id);
      setEditing(false);
    }
  };

  TodoItem.propTypes = {
    itemProp: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
    setUpdate: PropTypes.func.isRequired,
  };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button onClick={handleEditing}><AiFillEdit style={{ color: "#5e5e5e", fontSize: "16px" }} /></button>
        <button onClick={() => delTodo(itemProp.id)}><FaTrash style={{ color: "#5e5e5e", fontSize: "16px" }} /></button>
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>
      <input
        type="text"
        ref={editInputRef}
        defaultValue={itemProp.title}
        className={styles.textInput}
        style={editMode}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
