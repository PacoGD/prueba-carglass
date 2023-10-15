import { useState } from "react";

const CommentList = () => {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();

    if (inputText.trim() !== "") {
      setTasks([...tasks, inputText]);
      setInputText("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <input type="submit" value="Post" />
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
