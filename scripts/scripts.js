var $ = document
let loadingPage = $.querySelector(".loading-page")
let inputToDo = $.querySelector("#input-todo");
let tsksBody = $.querySelector("#tasks")
let addButton = $.querySelector("#add-button")
let ClearButton = $.querySelector("#clear-button")
let taskCounterElem = $.querySelector("#task-span")
let complateCounterElem = $.querySelector("#complated-span")
let btnColors = $.querySelectorAll(".btn-colors")
let taskCounter = 0
let complateCounter = 0


window.addEventListener("load",function(){
    loadingPage.classList.add("loaded")
})













btnColors.forEach(function(btn){
    btn.addEventListener("click",function(){

        let color = btn.getAttribute("id")
        let concat = color + " " + "form-control"
        
        inputToDo.setAttribute("class",concat)
        if(inputToDo.className === "bg-dark" + " " + "form-control"){
            inputToDo.style.color = "white"
        }else{
            inputToDo.style.color = "black"
        }
    })
})









function addNewToDo(todoValue){
    taskCounter += 1
    //Selectors
    

    // create elements
    let newTodoDiv = $.createElement("div")
    let newTasksDivInput = $.createElement("div")
    let divBtnGroup = $.createElement("div")
    let newTasksTitle = $.createElement("h5")
    let newTodoButtonDelete = $.createElement("a")
    let newTodoButtonEdit = $.createElement("a")
    let newTodoButtonCompalted = $.createElement("a")

    // add Classes
    newTodoDiv.className = "card mt-5 text-white"
    newTasksDivInput.className = "card-body text-dark d-flex"
    newTasksTitle.className = "card-title"
    newTodoButtonDelete.className = "btn btn-danger mx-2"
    newTodoButtonEdit.className = "btn btn-secondary mx-2"
    newTodoButtonCompalted.className = "btn btn-primary mx-2"

    // style
    newTodoDiv.style.width = "100%"
    newTasksDivInput.style.justifyContent = "space-between"

    //append body
    newTodoDiv.appendChild(newTasksDivInput)
    newTasksDivInput.appendChild(newTasksTitle)
    newTasksDivInput.appendChild(divBtnGroup)
    divBtnGroup.append(newTodoButtonDelete,newTodoButtonEdit,newTodoButtonCompalted)

    // inners HTML
    newTasksTitle.innerHTML = todoValue
    newTodoButtonDelete.innerHTML = "delete"
    newTodoButtonCompalted.innerHTML = "compalte"
    newTodoButtonEdit.innerHTML = "Edit"
    taskCounterElem.innerHTML = taskCounter
    complateCounterElem.innerHTML = complateCounter
    // add body
    tsksBody.appendChild(newTodoDiv)
    
    // cpmplate button function
    newTodoButtonCompalted.addEventListener("click",function(e){
        let complateTask = e.target.parentElement
        complateCounter +=1
        complateCounterElem.innerHTML = complateCounter
        let delEl = complateTask.previousElementSibling
        delEl.classList.toggle("del")

    })

    // delete button function
    newTodoButtonDelete.addEventListener("click",function(e){
        e.target.parentElement.parentElement.parentElement.remove()
        taskCounter -= 1
        taskCounterElem.innerHTML = taskCounter
        
    })
}

ClearButton.addEventListener("click",function(){
    inputToDo.value = " "
})

addButton.addEventListener("click",function(e){
    let todoValue = inputToDo.value
    if(todoValue){ 
    inputToDo.value = " "
    addNewToDo(todoValue)
    }
})

inputToDo.addEventListener("keydown",function(e){
    
    // for write
    let todoValue = e.target.value.trim();
    
    if(e.keyCode === 13){
        if(todoValue){ 
            inputToDo.value = " "
            addNewToDo(todoValue)
        }
    }
})









