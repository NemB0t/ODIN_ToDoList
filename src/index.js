import './style.css';
import del_btn_png from './bin.png';

const bin_img = new Image;

const tempDivParentTemplate = document.createElement('div');
tempDivParentTemplate.classList.add('sidebarparent');

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
    const sidebar = document.querySelector('.sidebar');
    sidebar.replaceChildren();
    pList.forEach(project=>{
        const template= tempDivParentTemplate.cloneNode(true);
        
        const tempDiv = document.createElement('div');
        tempDiv.textContent=project.name;
        tempDiv.classList.add('sidebarName');
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


const main = function(){
    const projectList = []
    const defaultProject = projectFactorey("ToDo's",[])
    projectList.push(defaultProject);
//    const bsasb = projectFactorey("ToDdfsds's",[])
//    projectList.push(bsasb);
    displaySidebar(projectList);
}

main()

// const wrapper = document.querySelector('.header');
// wrapper.style.backgroundColor = "red";