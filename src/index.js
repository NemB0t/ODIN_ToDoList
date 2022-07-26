import './style.css';
import del_btn_png from './bin.png';

const bin_img = new Image;

const tempDivParentTemplate = document.createElement('div');
tempDivParentTemplate.classList.add('sidebarparent');

const todoTemplate = document.createElement('div');
todoTemplate.classList.add('todoParent');

//bin_img.src = del_btn_png;

const projectFactorey = (name, todoList) => {
  //const sayHello = () => console.log('hello!');
  return { name, todoList };
};

const toDoFactory = (title, description, dueDate, priority) => {
  //const sayHello = () => console.log('hello!');
  return { title, description, dueDate, priority };
};

const header = document.querySelector('.header');
header.textContent = "ToDo List";

const displaySidebar = function(pList){
//    console.log(pList);
    const sidebar = document.querySelector('.sidebar');
    sidebar.replaceChildren();
    pList.forEach((project, pindex, parr)=>{
        const template= tempDivParentTemplate.cloneNode(true);
        
        const tempDiv = document.createElement('div');
        tempDiv.textContent=project.name;
        tempDiv.classList.add('sidebarName');
        
        tempDiv.addEventListener('click',()=>{
//            console.log(parr[pindex]);
            displayToDo(parr,pindex);
        });
        
        template.appendChild(tempDiv);
        
        if(project.name!="ToDo's")
        {
            const tempDivDelBTN = document.createElement('button');
            tempDivDelBTN.textContent = "Delete";
            tempDivDelBTN.classList.add('sidebarDelBtn');
            tempDivDelBTN.addEventListener("click",()=>{
                var filtered = pList.filter(function(value, index, arr){ 
                    return value != project;
                });
                pList=filtered;
                displaySidebar(pList);
            });
            template.appendChild(tempDivDelBTN);
        }
        sidebar.appendChild(template);       
    });
    const addProjectBTN = document.createElement('button');
    addProjectBTN.textContent="Add Project"
    addProjectBTN.classList.add('addprojectbtn');
    addProjectBTN.addEventListener("click",()=>{
        const pname = prompt('Enter the name of the Project');
        const newProject= projectFactorey(pname,[]);
        pList.push(newProject);
        displaySidebar(pList);
    });
    sidebar.appendChild(addProjectBTN); 
};



const displayToDo = function(parr,pindex){
    let tList=parr[pindex].todoList;
//    console.log(parr[pindex]);
    const mid = document.querySelector('.mid');
    mid.replaceChildren();
//    console.log(tList);
    tList.forEach((pValue, pIndex, pArr)=>{
        const template = todoTemplate.cloneNode(true);
        
        const title = document.createElement('div');
        title.textContent=pValue.title;
        title.classList.add('todoTitle');
        template.appendChild(title);
        
        const description = document.createElement('div');
        description.textContent=pValue.description;
        description.classList.add('todoDescription');
        template.appendChild(description);
        
        const dueDate = document.createElement('div');
        dueDate.textContent=pValue.dueDate;
        dueDate.classList.add('todoDueDate');
        template.appendChild(dueDate);
        
        const priority = document.createElement('div');
        priority.textContent=pValue.priority;
        priority.classList.add('todoPriority');
        template.appendChild(priority);
        
        const deleteBTN = document.createElement('button');
        deleteBTN.textContent = "Delete";
        deleteBTN.classList.add('midDelBtn');
        deleteBTN.addEventListener("click",()=>{
            var filtered = tList.filter(function(value, index, arr){ 
                return value != pValue;
            });
            tList=filtered;
            parr[pindex].todoList=tList
            displayToDo(parr,pindex);
        });
        template.appendChild(deleteBTN);
        
        mid.appendChild(template);
    });
    
    const addTodoBTN = document.createElement('button');
    addTodoBTN.textContent="Add Task"
    addTodoBTN.classList.add('addtodobtn');
    addTodoBTN.addEventListener('click',()=>{
        openTheForm();
    });
    
    mid.appendChild(addTodoBTN);
    
    const todo_form= document.querySelector('#task-form');
    todo_form.addEventListener('submit',handleSubmit);
    function handleSubmit(e) {// add a book to library array when form is submitted
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
//        console.log(formProps);
        const title = formProps.title;
        const description = formProps.description;
        const duedate=formProps.duedate;
        const priority = formProps.priority;
        const temp = toDoFactory(title,description,duedate,priority);
//        console.log(temp);
        console.log(parr[pindex]);
        parr[pindex].todoList.push(temp);
        displayToDo(parr,pindex);
        closeTheForm();
        todo_form.reset();
    };
};

const cancelbtn = document.querySelector('#cancelbtn');
cancelbtn.addEventListener('click',closeTheForm);

const main = function(){
    const projectList = [];
    const defaultProject = projectFactorey("ToDo's",[])
    const todo= toDoFactory('test','Hope it works','soon','high');
    defaultProject.todoList.push(todo);
    projectList.push(defaultProject);
//    const bsasb = projectFactorey("ToDdfsds's",[])
//    projectList.push(bsasb);
    displaySidebar(projectList);
//    displayToDo(projectList,0);
}

function openTheForm() {
    document.getElementById("popupForm").style.display = "block";
    blurBg();
}
  
function closeTheForm() {
    document.getElementById("popupForm").style.display = "none";
    unBlurBg();
}

function blurBg(){
    const container = document.querySelector('.wrapper');
    container.classList.add('blur');
}
function unBlurBg(){
    const container = document.querySelector('.wrapper');
    container.classList.remove('blur');
}

main()

// const wrapper = document.querySelector('.header');
// wrapper.style.backgroundColor = "red";