import './style.css';
import { format} from 'date-fns'
// import { format, compareAsc } from 'date-fns'
//import del_btn_png from './bin.png';

const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')
const deleteListBtn = document.querySelector('[data-delete-list-btn]')
const listDisplayContainer = document.querySelector('[data-list-display-container]')
const listTitleElement = document.querySelector('[data-list-title]')
const listCountElement = document.querySelector('[data-list-count]')
const tasksContainer = document.querySelector('[data-tasks]')
const taskTemplate = document.getElementById('task-template')
const newTaskForm = document.querySelector('[data-new-task-form]')
const newTaskInput = document.querySelector('[data-new-task-input]')
const newTaskDate = document.querySelector('[data-new-task-date]')
const newTaskPrio = document.querySelector('[data-new-task-prio]')
const clearCompleteTasksBtn = document.querySelector('[data-clear-complete-task-btn]')

//keys for local storage
const LOCAL_STORAGE_LIST_KEY = "task.lists"
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = "task.selectedListId"

// Get empty list if not thing is there in local storage
let lists =JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []

// Get the selected list
let selectedListID = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY))

clearCompleteTasksBtn.addEventListener('click',() =>{
    const selectedList = lists.find(list => list.id === selectedListID)
    selectedList.tasks = selectedList.tasks.filter(task => !task.complete)
    saveAndRender()
})

deleteListBtn.addEventListener('click', () =>{
    lists= lists.filter(list => list.id !== selectedListID)
    selectedListID = null
    saveAndRender()
})

listContainer.addEventListener('click',e=>{
    if(e.target.tagName.toLowerCase()==='li'){
        selectedListID=e.target.dataset.listId
        saveAndRender()
    }
})

tasksContainer.addEventListener('click', e => {
    if(e.target.tagName.toLowerCase()==='input'){
        const selectedList = lists.find(list => list.id === selectedListID)
        const selectedTask = selectedList.tasks.find(task => task.id === e.target.id)
        selectedTask.complete=e.target.checked
        save()
        renderTaskCount(selectedList)
    }
})

newListForm.addEventListener('submit',e=>{
    e.preventDefault()
    const listName = newListInput.value
    if(listName == null || listName === '') return
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    saveAndRender()
})

newTaskForm.addEventListener('submit',e=>{
    e.preventDefault()
    const taskName = newTaskInput.value
    let taskDate = newTaskDate.value
    const taskPrio = newTaskPrio.value
    taskDate=processDateData(taskDate)
    console.log(taskDate)
    if(taskName == null || taskName === '') return
    const task = createtask(taskName,taskDate,taskPrio)    
    console.log(taskPrio)
    newTaskInput.value = null
    newTaskDate.value = null
    console.log(task)
    
    const selectedList = lists.find(list => list.id === selectedListID)
    selectedList.tasks.push(task)
    saveAndRender()
})

function processDateData(date){
    let formattedDate;
    if(!date){
        formattedDate = "No Due Date";
    }
    else{
        formattedDate = format(new Date(date), 'yyyy-MM-dd')
    }
    return formattedDate;
}

function createtask(name,taskDate,taskPrio){
    return {id: Date.now().toString() , name: name, complete : false, endDate: taskDate,prio: taskPrio}
}

function createList(name){
    return {id: Date.now().toString() , name: name, tasks: []}
}

function saveAndRender(){
    save()
    render()
}

function save(){
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY,JSON.stringify(lists))
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, JSON.stringify(selectedListID))
}

function render(){
    clearElements(listContainer)
    renderLists()
    
    const selectedList = lists.find(list => list.id === selectedListID)
    
    if(selectedListID===null){
        listDisplayContainer.style.display = 'none'
    }
    else{
        listDisplayContainer.style.display = ''
        listTitleElement.innerText = selectedList.name
        renderTaskCount(selectedList)
        clearElements(tasksContainer)
        renderTasks(selectedList)
    }
}

function renderTasks(selectedList){
    selectedList.tasks.forEach(task =>{
        const taskElement = document.importNode(taskTemplate.content,true)
        const checkbox = taskElement.querySelector('input')
        const taskPriority = task.prio
        checkbox.id = task.id
        checkbox.checked = task.complete
        const label = taskElement.querySelector('label')
        label.htmlFor = task.id
        label.append(task.name)
        const templateDate = taskElement.querySelector('.date')
        templateDate.innerText = task.endDate
        const templatePrio= taskElement.querySelector('.prio')
        templatePrio.innerText=taskPriority
        if(taskPriority==="Low"){
            templatePrio.style.color = 'green'
        }
        else if(taskPriority==="Medium"){
            templatePrio.style.color = 'orange'
        }
        else if(taskPriority==="High"){
            templatePrio.style.color = 'red'
        }

        tasksContainer.appendChild(taskElement)
    })
}

function renderTaskCount(selectedList){
    const incompleteTaskCount = selectedList.tasks.filter(task => !task.complete).length
    const taskString = incompleteTaskCount===1 ? 'task':'tasks'
    listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`
}
function renderLists(){
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.classList.add("list-name")
        listElement.dataset.listId = list.id
        listElement.innerText = list.name
        if (list.id === selectedListID){
            listElement.classList.add("active-list")
        }
        listContainer.appendChild(listElement)
    })
}

function clearElements(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}

render()