/* script.js */

let add_task=document.getElementById('add_task');
let new_task=document.querySelector('.new_task');

add_task.addEventListener('click', addNewTask);

function addNewTask(){
    new_task.style.display='block';
}




let task_title=document.getElementById('task_title');
let task_description=document.getElementById('task_description');
let start_date=document.getElementById('start_date');
let end_date=document.getElementById('end_date');

let btn_add=document.getElementById('btn_add');
btn_add.addEventListener('click', createNewTask);

function createNewTask(){
    let board_block1=document.querySelector('.board_block1');
    let task=document.createElement('div');
    task.classList.add('task');

    board_block1.appendChild(task);
    new_task.style.display='none';


    let title=document.createElement('div');
    title.innerHTML=task_title.value;
    title.classList.add('title');
    task.appendChild(title);

    let description=document.createElement('div');
    description.innerHTML=task_description.value;
    description.classList.add('description');
    task.appendChild(description);


    let start=document.createElement('div');
    start.innerHTML='Start: '+start_date.value;
    start.classList.add('start');
    task.appendChild(start);

    let end=document.createElement('div');
    end.innerHTML='End: '+end_date.value;
    end.classList.add('end');
    task.appendChild(end);

    let icons=document.createElement('div');
    icons.classList.add('icons');
    task.appendChild(icons);

    let pen=document.createElement('img');
    pen.src='img/pen.png';
    pen.classList.add('icon_edit');
    icons.appendChild(pen);

    let trash=document.createElement('img');
    trash.src='img/trash.png';
    trash.classList.add('icon_remove');
    icons.appendChild(trash);

    task_title.value='';
    task_description.value='';
    start_date.value='';
    end_date.value='';


 
}



btn_close.addEventListener('click', closeWindow);

function closeWindow(){
    new_task.style.display='none';
}