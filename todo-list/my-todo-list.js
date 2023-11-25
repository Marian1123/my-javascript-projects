document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});

const todoList = [{
  name: 'wash dishes',
  dueDate: '10-02-2023'
}, {
  name: 'make dinner',
  dueDate: '10-02-2023'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject) => {
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;

    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="js-delete-todo-button delete-todo-button">Delete</button>
    `;

    todoListHTML += html;
  });

  document.querySelector('.js-todo-grid').innerHTML = todoListHTML; 

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    })
  });

}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    name: name,
    dueDate: dueDate
  });

  inputElement.value = '';

  renderTodoList();
}