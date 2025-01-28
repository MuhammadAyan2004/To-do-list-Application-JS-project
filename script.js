const input = document.getElementById("addTask");
const addBtn = document.getElementById("add");
const task = document.getElementById("task");

let editTodo = null;

const todo = ()=>{
    const value = input.value.trim();
    if(value === ""){
        alert("write something to add")
    }else if(addBtn.innerText === "Edit"){ 
        editTodo.target.parentElement.querySelector("p").innerHTML= input.value;
        addBtn.innerHTML = "Add"
        input.value = "";
    }else {
        const li = document.createElement("li")
        const p = document.createElement("p");
        p.innerHTML = value;
        li.appendChild(p);

        const edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerHTML = "Edit";
        li.appendChild(edit);
        
        const del = document.createElement("button");
        del.classList.add("del");
        del.innerHTML = "remove";
        li.appendChild(del);
        
        task.append(li)
    }
    input.value = "";
    saveData()
}
task.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }else if(e.target.innerHTML === "remove"){
        e.target.parentElement.remove();
        saveData()
    }else if(e.target.innerText === "Edit"){
        input.value =e.target.parentElement.querySelector("p").innerHTML;
        input.focus();
        addBtn.innerHTML = "Edit"
        editTodo = e;
        saveData()
    }
},false)
input.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
        todo()
    }
})
function saveData(){
    localStorage.setItem("data",task.innerHTML)
}
function showList(){
    task.innerHTML = localStorage.getItem("data")
}
showList()