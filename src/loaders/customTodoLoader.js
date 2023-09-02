const customTodoLoader = async () => {
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos");
  return todos;
};

export default customTodoLoader;
