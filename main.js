// import './style.css'

const form = document.querySelector("form")
const inputText = document.querySelector("#todotext");
const todoList = document.querySelector(".todo-list");
const removeTask = document.querySelector(".remove-task");

class Todo {
  constructor(id, text) {
      this.id = id;
      this.text = text;
  }

 generateId() {
  return self.crypto.randomUUID()
 }

}

class TodoManager {
  constructor(todoList) {
    this.todoList = todoList;
  }
  
  filterTasks(taskId) {
    	this.todoList
  }

}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // razlika izmedu == i ===??
  if (!inputText.value == "") {
    const todo = new Todo(self.crypto.randomUUID(), inputText.value)
    const html = `<div class="todo-task">
                    <p>${todo.text}</p>
                    <button class="remove-task">Delete</button>
                  </div>`;
    todoList.insertAdjacentHTML("afterbegin", html)
    inputText.value = "";
    console.log(Todo.generateId)
  }
})

// removeTask.addEventListener("click", () => {

// })

