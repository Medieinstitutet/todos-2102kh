import "../scss/style.css";

let todosArr = [
  {
    id: 1,
    title: "Learn the JS function",
    completed: false,
  },
  {
    id: 2,
    title: "Exersices with Objekt",
    completed: true,
  },
  {
    id: 3,
    title: "Exersices with Events in JS",
    completed: false,
  },
];
//Sorterade todosArr efter True och False
todosArr.sort(function(a,b){
if(a.completed===b.completed){
return a.title - b.title;
} else { return a.completed ? -1 : 1;
  }
});


const todos = document.querySelector("#todolist");
const input = document.querySelector(".input");

//<li class="todo__list" data-id="1"></li>

 const createTodos = () => {
  todos.innerHTML = "";
  todosArr.forEach((element) => {
  const li = document.createElement("li");
  li.className = "todo__list";
  if (element.completed) {
    li.classList.add("todo__list_completed");
    li.textContent = element.title;
  } else {
    li.classList.remove("todo__list_completed");
    console.log("Skapa span");
    const span = document.createElement("span");
    span.className = "alltodo";
    span.innerHTML = element.title;
    li.appendChild(span); 
      
    } // skapade  lista med punkter med

    li.id = element.id;
    const button = document.createElement("button");
    button.innerText = "Ta bort";
    li.append(button);

    button.addEventListener("click", () => {
    todosArr = todosArr.filter((item) => item.id !== element.id);
    createTodos();
    });

    li.addEventListener("click", () => {
    handleClick(element);
    });
    todos.append(li);
  });
};
 createTodos();

 function handleClick(el) {
  todosArr.forEach((item) => {
    if (item.id === el.id) {
    console.log("item.id === el.id", item.id);
    item.completed = !item.completed;
    console.log("item.completed", item.completed);
    }
  });
  createTodos();
}
input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
  const id = todosArr[todosArr.length - 1]?.id + 1 || 1; // ||

  todosArr.push({
    id: id,
    title: input.value,
    completed: false,
    });
    input.value = "";
    createTodos();
  
  }
});


