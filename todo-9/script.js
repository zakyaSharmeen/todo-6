
const inputField = document.querySelector(".input-field textarea"),
      todoLists = document.querySelector(".todoLists"),
      pendingNum = document.querySelector("pending-num"),
      clearButton = document.querySelector("clear-button");
// console.log(inputField,todoLists, pendingNum, clearButton )   

function allTasks(){
    let tasks = document.querySelectorAll(".pending");
    // console.log(tasks);
    pendingNum.textContent = tasks.length ===0 ? "no" : tasks.length;
}

inputField.addEventListener("keyup", (e) =>{

    let inputVal = inputField.value.trim();
   

    if(e.key === "Enter" && inputVal.length >0){
        let LiTag =`
        <li class="list pending" onclick="handleStatus(this)">
        <input type="checkbox">
        <span class="task">${inputVal}</span>
        <i class="fa-solid fa-trash"></i>

      </li>
                    
        `;

        todoLists.insertAdjacentHTML("beforeend", LiTag);
        inputField.value = "";
        allTasks();
        
    }
});

function handleStatus(e){
    const checkbox = e.querySelector("input");
    // console.log(checkbox);
    checkbox.checked = checkbox.checked ? false: true;
    e.classList.toggle("pending");
    allTasks();
        
}
clearButton.addEventListener("click", () => {
    todoLists.innerHTML ="";
});