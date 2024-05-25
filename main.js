// import './style.css'

const form = document.querySelector("form")
const inputText = document.querySelector("#todotext");
const todoList = document.querySelector(".todo-list");
const deleteBtn = document.querySelector(".delete-btn");


// text mi se previse rasiri

class Todo {
  constructor(text) {
    this.id = self.crypto.randomUUID();
    this.text = text;
    this.done = false;
  }
  
  toggleIsDone() {
    this.done = !this.done
  }
  
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
  
  deleteTodo(todoId) {
    this.todos = this.todos.filter((todoTask) => {
      return todoTask.id !== todoId
    })
  }

  renderTodos() {
    todoList.innerHTML = "";
    this.todos.forEach((todoTask) => {
      const html = `<div class="todo-task">
                      <p>${todoTask.text}</p>
                      <div class="buttons">
                        <button class="delete-btn" data-id="${todoTask.id}">Delete</button>
                        <button class="is-done ${todoTask.done ? "done" : ""}" data-id="${todoTask.id}">Done</button>
                      </div>  
                    </div>`;
        todoList.insertAdjacentHTML("afterbegin", html)
    })
  }
}

const todoList1 = new TodoManager()

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // razlika izmedu == i ===??
  if (!inputText.value == "") {
    const todo = new Todo(inputText.value)
    todoList1.addTodo(todo)
    todoList.innerHTML = "";
    todoList1.renderTodos()
    inputText.value = "";
  }
})

todoList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    todoList1.deleteTodo(event.target.getAttribute("data-id"))
    todoList1.renderTodos()
  }

  if (event.target.classList.contains("is-done")) {
    const todo = todoList1.todos.find(todo => todo.id === event.target.getAttribute("data-id"))
    todo.toggleIsDone()
    todo.done ? event.target.style.backgroundColor = "green" : event.target.style.backgroundColor = ""; 
  }
})

