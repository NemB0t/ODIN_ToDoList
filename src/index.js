import './style.css';
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

clearCompleteTasksBtn.addEventListener('click',e =>{
    const selectedList = lists.find(list => list.id === selectedListID)
    selectedList.tasks = selectedList.tasks.filter(task => !task.complete)
    saveAndRender()
})

deleteListBtn.addEventListener('click', e =>{
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
    if(taskName == null || taskName === '') return
    const task = createtask(taskName)
    newTaskInput.value = null
    // console.log(newTaskDate.value)
    
    const selectedList = lists.find(list => list.id === selectedListID)
    selectedList.tasks.push(task)
    saveAndRender()
})

function createtask(name){
    return {id: Date.now().toString() , name: name, complete : false}
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
        checkbox.id = task.id
        checkbox.checked = task.complete
        const label = taskElement.querySelector('label')
        label.htmlFor = task.id
        label.append(task.name)
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