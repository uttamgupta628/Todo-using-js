let todoArray = JSON.parse(localStorage.getItem('todoArray')) || [];
function todoItem(){
    let input_item=document.querySelector('#todo-input'); 
    let input_dateTodo=document.querySelector('#date-input')
    let input_name=input_item.value;
    let input_date=input_dateTodo.value;
    todoArray.push({ todoname: input_name, tododate: input_date });
    input_item.value='';
    input_dateTodo.value='';
    localStorage.setItem('todoArray', JSON.stringify(todoArray));
    todoItems()
}
function todoItems(){
    let tododisplay=document.querySelector('.todo_container')
    let newHtml='';
    for(let i=1;i<todoArray.length;i++){
        let {todoname,tododate}=todoArray[i];
        newHtml+=
        `
        <span>${todoname}</span>
        <span>${tododate}</span> 
        <button onclick="deleteTodoItem(${i});" class="delete-Button">Delete</button>
         `;
        }
        tododisplay.innerHTML=newHtml;
}
function deleteTodoItem(index) {
    todoArray.splice(index, 1);
    localStorage.setItem('todoArray', JSON.stringify(todoArray));
    todoItems();
}
todoItems();