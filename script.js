const input = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const todo = document.getElementById("todoList");

let editTodo=null;

const addTodo=()=>{
    const inputText = input.value.trim();
    if(inputText.length<=0){
        alert("you must right something");
        return false;
        
    }else if(addBtn.value==="Edit"){
    editTodo.target.previousElementSibling.innerHTML = inputText;
    addBtn.value="Add";
    input.value="";  

    }else{
        // creating p tag
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML=inputText;
    li.appendChild(p);

    // creating edit button
    const edit = document.createElement("button");
    edit.innerText="Edit";
    edit.classList.add("editBtn");
    li.appendChild(edit);  
    // creating delete button
    const del = document.createElement("button");
    del.innerText="remove";
    del.classList.add("delBtn");
    li.appendChild(del);  


    todo.appendChild(li);
    input.value="";
 }
};

const updateTodo = (e)=>{

    if( e.target.innerHTML ==="remove"){
    
        todo.removeChild(e.target.parentElement);
    }else if(e.target.innerHTML ==="Edit"){
        
        input.value = e.target.previousElementSibling.innerHTML;
        input.focus();
        addBtn.value="Edit";
        editTodo=e;

    }
}

addBtn.addEventListener("click",addTodo);
todo.addEventListener("click", updateTodo);
