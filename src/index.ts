import {v4 as uuidV4} from 'uuid'

const list = document.querySelector<HTMLUListElement>('#list');
const button = document.getElementById('button') as HTMLButtonElement ;
const form = document.getElementById('#new-task-form') as HTMLFormElement ;
const input = document.querySelector<HTMLInputElement>('#new-task-title');

interface Task {
    id:string,
    title:string,
    completed:boolean,
    createdAt:Date
}

let tasks:[] = JSON.parse(localStorage.getItem("TODOS"))
tasks.forEach(addListItem);
console.log(tasks)

button?.addEventListener('click', e => {
    e.preventDefault();

    if(input?.value == '' || input?.value == null) return;

    const newTask:Task = {
        id:uuidV4(),
        title:input.value,
        completed:true,
        createdAt:new Date()
    }

    tasks.push(newTask);
    setLocalStorageItems();


    addListItem(newTask);
    input.value = ''
});
function addListItem(newTask:Task):void {
    const item = document.createElement('li')
    const label = document.createElement('label')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    label.append(checkbox , newTask.title);
    checkbox.checked = newTask.completed
    item.append(label);
    list?.append(item);

    checkbox.addEventListener('change', e => {
        newTask.completed = checkbox.checked
        
        setLocalStorageItems();
    })

}

function setLocalStorageItems() {
    localStorage.setItem('TODOS' , JSON.stringify(tasks))
}

function loadTasks(): Task[] {
    const taskJSON = localStorage.getItem("TODOS")
    if (taskJSON == null) return []
    return JSON.parse(taskJSON)
  }