
const inputText = document.querySelector(".text");
const addBtn = document.querySelector(".add");
const allTodosBtn = document.querySelector(".all-todos");
const completedTodosBtn = document.querySelector(".completed-todos");
const pendingTodosBtn = document.querySelector(".pending-todos");
const clearTodosBtn = document.querySelector(".clearall");
const todoList = document.querySelector(".list");
const pendingCount = document.querySelector(".pending-count");

const todos = [];

class Todo {
  constructor(todoText) {
    this.todoText = todoText;
    this.id = Date.now();
    this.isCompleted = false;
    this.createdAt = new Date();
  }
}

function drawTodos(todos) {
  let filteredTodos = [];
  switch (filter = "all"){
    case "completed":
      filteredTodos = todos.filter((todo) => todo.completed);
      break;
    case "pending":
      filteredTodos = todos.filter((todo) => !todo.completed);
      break;
    default:
      filteredTodos = todos;
  }
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    let element = document.createElement("li");
    element.className = "list-element";
    element.innerHTML = `
     <div class="textlist">
         <div class="li-element">
      <input class="form" type="checkbox" class="checkbox data-id=${todo.id}"/>
      <span>${todo.todoText}</span>
      </div>
      <div class="actions">
      <button class="edit data-id=${todo.id}"><i class="fa fa-pencil" aria-hidden="true"></i></button>
      <button class="delete  data-id=${todo.id}"><i class="fa fa-trash" aria-hidden="true"></i></button>
      </div>
     </div>
    `;
    todoList.appendChild(element);
  });

//   editBtn.addEventListener("click", () => {
//       const changedText = prompt("Enter new content:", schedule.text)
//       if(changedText.trim() !== "") {
//           inputText.text == changedText.trim();
//           newText.textContent == changedText;
//           drawTodos();
//       }
//   });
  const deleteBtn = document.querySelectorAll(".delete");
  deleteBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const todoId = this.getAttribute("data-id");
          deleteTodo(todoId);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    });
  });

  const checkBox = document.querySelectorAll("checkbox");
  checkBox.forEach((input) => {
    input.addEventListener("change", function (e) {
      const id = this.getAttribute("data-id");
      Toggle(id);
    });
  });
}

function deleteTodo(id) {
  const index = todos.findIndex((todo) => todo.id);
  todos.splice(index, 1);
  drawTodos(todos);
  changePendingCount() ;
}

function Toggle(id) {
  const todo = todos.find((todo) => todo.id == id);
  if (todo.isCompleted == true) {
    todo.isCompleted == false;
  } else {
    todo.isCompleted == true;
  }
  drawTodos(todos);
  changePendingCount();
}

function changePendingCount() {
  const pendingCountText = document.querySelector(".count");
  const filteredTodos = todos.filter((todo) => !todo.completed);
  let count = filteredTodos.length;
  pendingCountText.textContent = count
}

addBtn.addEventListener("click", () => {
  const todo = new Todo(inputText.value.trim());
  todos.push(todo);
  todoList.append(drawTodos(todos));

  inputText.value = "";
  changePendingCount();
  drawTodos(todos);


  Swal.fire({
    position: "center",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500,
  });
});

allTodosBtn.addEventListener("click", () => {
  drawTodos(todos);
});

completedTodosBtn.addEventListener("click", () => {
  drawTodos((filter = "completed"));
});

pendingTodosBtn.addEventListener("click", () => {
  drawTodos((filter = "pending"));
});

clearTodosBtn.addEventListener("click", () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons
    .fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, clear all!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        todos.length = 0;
        drawTodos(todos);
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error",
        });
      }
    });
});