
import React, { useState } from 'react';
import Items from './Items';
import './ToDo.css';

const ToDo = () => {
  const [todolist, setToDoList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const saveList = (event) => {
    event.preventDefault();
    const listName = event.target.elements.listName.value.trim();

    if (!listName) {
      alert("Please enter a todo name.");
      return;
    }

    if (!todolist.includes(listName)) {
      setToDoList([...todolist, listName]);
      setCompletedList([...completedList, false]);
    } else {
      alert("Todo name already exists.");
    }

    event.target.reset();
  };

  const deleteItem = (index) => {
    const updatedList = [...todolist];
    const updatedCompleted = [...completedList];

    updatedList.splice(index, 1);
    updatedCompleted.splice(index, 1);

    setToDoList(updatedList);
    setCompletedList(updatedCompleted);
  };

  const toggleComplete = (index) => {
    const updatedCompleted = [...completedList];
    updatedCompleted[index] = !updatedCompleted[index];
    setCompletedList(updatedCompleted);
  };

  return (
    <div className="container">
      <h1>ToDo List</h1>
      <form onSubmit={saveList}>
        <input type="text" name="listName" placeholder="Enter your task here"/>
        <button>Save</button>
      </form>

      

      {todolist.map((value, index) => (
        <Items
          key={index}
          value={value}
          index={index}
          isCompleted={completedList[index]}
          onDelete={deleteItem}
          onToggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
};

export default ToDo;
