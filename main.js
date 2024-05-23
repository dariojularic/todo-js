// import './style.css'

const form = document.querySelector("form")
const inputText = document.querySelector("#todotext");
const todoList = document.querySelector(".todo-list");
const deleteBtn = document.querySelector(".delete-btn");
const doneBtn = document.querySelector(".is-done"); 

class Todo {
  constructor(text) {
      this.id = self.crypto.randomUUID();
      this.text = text;
      this.done = false;
  }

  toggleIsDone() {

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
    // const newTodos = this.todos.filter(todo => todo.id !== todoId)
    // this.todos = newTodos;
    this.todos = this.todos.filter((todoTask) => {
      return todoTask.id !== todoId
      // console.log("id od todotask", todoTask.id)
      // console.log("id koji zelim izbrisat", todoId)
      // console.log(this.todos)
    })
    console.log(this.todos)
  }

  renderTodos() {
    todoList.innerHTML = "";
    this.todos.forEach((todoTask) => {
      const html = `<div class="todo-task">
                      <p>${todoTask.text}</p>
                      <div class="buttons">
                        <button class="delete-btn" data-id="${todoTask.id}">Delete</button>
                        <button class="is-done" data-id="${todoTask.id}>Done</button>
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
    console.log(todo)
    todoList1.addTodo(todo)
    todoList.innerHTML = "";
    todoList1.renderTodos()
    inputText.value = "";
  }
})

todoList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    // console.log("todos array", todoList1.todos)
    todoList1.deleteTodo(event.target.getAttribute("data-id"))
    todoList1.renderTodos()
    // console.log("todos array", todoList1.todos)
  }
  if (event.target.classList.contains("is-done")) {

  }
})

