import React, { useState, useEffect } from 'react';

// Componente de Tarea individual
const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}
      </span>
      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? 'Marcar como pendiente' : 'Marcar como completada'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  );
};

// Componente de Lista de Tareas
const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

// Componente de Formulario para agregar nuevas tareas
const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      addTask({ id: Date.now(), name: taskName, completed: false });
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={e => setTaskName(e.target.value)}
        placeholder="Escribe una nueva tarea..."
      />
      <button type="submit">Agregar tarea</button>
    </form>
  );
};

// Componente principal de la aplicación
const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Aquí podrías cargar las tareas desde un almacenamiento externo si fuera necesario
  }, []);

  const addTask = newTask => {
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = taskId => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = taskId => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </div>
  );
};

export default TodoApp;
