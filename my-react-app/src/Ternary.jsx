import React, { useState } from 'react';
import'./Ternary.css'

function TodoApp() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'complete') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true; 
  });

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="планы"
      />
      <button onClick={addTask}>Қосу</button>

      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('complete')}>Complete</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>

      <ul>
        {filteredTasks.map((t, i) => (
          <li key={i}>
            {t.text} {t.completed ? '✅' : '❌'}
            <button onClick={() => toggleComplete(i)}>Ауыстыру</button>
            <button onClick={() => toggleComplete(i)}>оширу</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;