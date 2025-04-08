/* script.js */

let add_task=document.getElementById('add_task');
let new_task=document.querySelector('.new_task');
let edit_task=document.querySelector('.edit_task');

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

    let icon_edit=document.createElement('img');
    icon_edit.src='img/pen.png';
    icon_edit.classList.add('icon_edit');
    icons.appendChild(icon_edit);

    let trash=document.createElement('img');
    trash.src='img/trash.png';
    trash.classList.add('icon_remove');
    icons.appendChild(trash);


    trash.addEventListener('click', function(event) {
		task.parentElement.removeChild(task);
		event.preventDefault();
	});


    task_title.value='';
    task_description.value='';
    start_date.value='';
    end_date.value='';

    let icons_edit=document.querySelectorAll('.icon_edit');
    for(let i=0; i < icons_edit.length; i++){
        icons_edit[i].addEventListener('click', editTask);
}


   
}
let main=document.querySelector('.main');
function editTask(event){
   
    let edit_task=document.createElement('div');
    edit_task.classList.add('edit_task');

    let caption_5=document.createElement('div');
    caption_5.innerHTML='Edit task';
    caption_5.classList.add('caption_5');
    edit_task.appendChild(caption_5);

    main.appendChild(edit_task);
    let icon_edit=event.target;
    let icon_edit_parent=icon_edit.parentElement;
    let icon_edit_grandparent=icon_edit_parent.parentElement;
    let to_do_title=icon_edit_grandparent.children[0];
    let edit_title=document.createElement('input');
    edit_title.classList.add('edit_title');
    edit_title.value=to_do_title.innerHTML;
    edit_task.appendChild(edit_title);


    edit_task.oninput = function() {
        to_do_title.innerHTML = edit_title.value;
    };

    let to_do_description=icon_edit_grandparent.children[1];
    let edit_description=document.createElement('input');
    edit_description.classList.add('edit_title');
    edit_description.value=to_do_description.innerHTML;
    edit_task.appendChild(edit_description);

    edit_description.oninput = function() {
        to_do_description.innerHTML = edit_description.value;
    };

    let to_do_date1=icon_edit_grandparent.children[2];
    console.log(to_do_date1);
    let edit_date1=document.createElement('input');
    edit_date1.setAttribute("type", "date");
    edit_task.appendChild(edit_date1);
    
    edit_date1.oninput = function() {
        to_do_date1.innerHTML = 'Start: '+edit_date1.value;
    };

    let to_do_date2=icon_edit_grandparent.children[3];
    console.log(to_do_date2);
    let edit_date2=document.createElement('input');
    edit_date2.setAttribute("type", "date");
    edit_task.appendChild(edit_date2);
    
    edit_date2.oninput = function() {
        to_do_date2.innerHTML = 'End: '+edit_date2.value;
    };

    let btn1_close=document.createElement('button');
    btn1_close.innerHTML='Close';
    btn1_close.classList.add('btn1_close');
    edit_task.appendChild(btn1_close);


    btn1_close.onclick = function() {
        edit_task.style.display='none';
    };
}


    


