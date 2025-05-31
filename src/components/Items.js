import './Items.css';
import React from 'react';

const Items = ({ value, index, onDelete, onToggleComplete, isCompleted }) => {
  return (
    <ul className="todo-list">
  <li className="todo-item" style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
    {value}
    <div className="btn-div">
    <button className="delete-btn" onClick={() => onDelete(index)}>Delete</button>
    <button className="complete-btn" onClick={() => onToggleComplete(index)}>
      {isCompleted ? 'Undo' : 'Completed'}
    </button>
    </div>
  </li>
</ul>

  );
};

export default Items;
