/* script.js */

let add_task=document.getElementById('add_task');
let new_task=document.querySelector('.new_task');

add_task.addEventListener('click', addNewTask);

function addNewTask(){
    new_task.style.display='block';
}