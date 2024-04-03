const TodoList = () => {
    const todo = [
        { id: 1, text: 'Learn React' },
        { id: 2, text: 'Build a project' },
        { id: 3, text: 'Deploy the project' },
      ];

  return (
    <div>
      <h1>Todo List</h1>
      {todo.map((items, index) => (
        <li key={index}>{items.id}{items.text}</li>
      ))}
    </div>
  )
}

export default TodoList;
