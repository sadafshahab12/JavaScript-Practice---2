let todoInput = document.getElementById("todo-input");
let addTodoBtn = document.getElementsByClassName("add-btn")[0];
let todoListContainer = document.getElementsByClassName("list")[0];

addTodoBtn.addEventListener("click", () => {
  // e.preventDefault()
  //   console.log(todoInput.value)
  const todoTask = todoInput.value.trim();
  if (todoTask !== "") {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    li.innerText = todoTask;
    li.appendChild(deleteBtn);
    todoListContainer.appendChild(li);

    deleteBtn.addEventListener("click", () => {
      todoListContainer.removeChild(li);
    });
    li.addEventListener("click", () => {
      // li.style.textDecoration = li.style.textDecoration === "line-through" ? "none" : "line-through";
      // li.style.color = li.style.textDecoration === "line-through" ? "gray" : "black";
      li.classList.toggle("completed");
      if (li.classList.contains("completed")) {
        alert("Task marked as completed!");
      } else {
        alert("Task marked as not completed!");
      }
    });
  }
  todoInput.value = "";
});
