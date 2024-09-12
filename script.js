const input = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const todo = document.getElementById("todoList");
let editTodo = null;
const addTodo = ()=>{
    const inputText = input.value.trim();
    if(input.value === ""){
        alert("please write something ");
        return false;
    }else if(addBtn.value==="Edit"){
        editTodo.target.previousElementSibling.innerHTML=inputText;
        addBtn.value="Add";
        input.value="";
    }else{
        //create p tag
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML=inputText;
        li.appendChild(p);
        todo.appendChild(li);
        input.value="";
        // create edit button
        const edit = document.createElement("button")
        edit.innerText="Edit";
        edit.classList.add("editBtn")
        li.appendChild(edit);
        // create delete button
        const del = document.createElement("button")
        del.innerText="Remove";
        del.classList.add("delBtn")
        li.appendChild(del);
    }
};
const updateTodo = (e)=>{
    if(e.target.innerHTML==="Remove"){
        todo.removeChild(e.target.parentElement);
    }else if (e.target.innerHTML==="Edit"){
        input.value=e.target.previousElementSibling.innerHTML;
        input.focus();
        addBtn.value="Edit";
        editTodo=e;
    }
}
addBtn.addEventListener("click",addTodo);
input.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});
todo.addEventListener("click",updateTodo);