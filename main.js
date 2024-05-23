// import './style.css'

const form = document.querySelector("form")
const inputText = document.querySelector("#todotext");
const todoList = document.querySelector(".todo-list");
const deleteBtn = document.querySelector(".delete-btn");


class Todo {
  constructor(text) {
      this.id = self.crypto.randomUUID();
      this.text = text;
  }

  changeColor() {
    console.log(this)
  }
  // metoda changeColor random background color

}

class TodoManager {
  // dobra praksa 
  todos;
  constructor() {
    this.todos = []
  }
  
  addTodo(todoTask) {
    this.todos.push(todoTask)
  }

  deleteTodo(todoList, todoId) {
    this.todos = todoList.filter((todoTask) => {
      todoTask.id !== todoId
      console.log("id od todotask", todoTask.id)
      console.log("id koji zelim izbrisat", todoId)
      console.log(this.todos)
    })
  }

  renderTodos() {
    this.todos.forEach((todoTask) => {
      const html = `<div class="todo-task">
                    <p>${todoTask.text}</p>
                    <button class="delete-btn" data-id="${todoTask.id}">Delete</button>
                  </div>`;
      todoList.insertAdjacentHTML("afterbegin", html)
    })
  }
}

const todoList1 = new TodoManager

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // razlika izmedu == i ===??
  if (!inputText.value == "") {
    const todo = new Todo(inputText.value)
    todoList1.addTodo(todo)
    todoList.innerHTML = "";
    todoList1.renderTodos()
    inputText.value = "";
    todo.changeColor()
  }
})

todoList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    console.log("todos array", todoList1.todos)
    todoList1.deleteTodo(todoList1.todos, event.target.getAttribute("data-id"))
    todoList1.renderTodos()
    console.log("todos array", todoList1.todos)
  }
})

