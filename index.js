var form = document.getElementById('add-todo');
var todoList = document.getElementById('todo-list');
var input = document.querySelector('input');

form.onsubmit = function(e) {
    e.preventDefault();
    var button = document.createElement('button');
    var li = document.createElement('li');
    var value = /^[a-zA-Z\s]+$/;
    var inputValue = input.value.trim();

    if (inputValue.match(value)) {
        todoList.appendChild(li);
        li.appendChild(button);

        var list = inputValue;
        button.textContent = list;

        var count = 0;

        button.onclick = function() {
            function doneList() {
                button.style.textDecoration = "line-through";
            }
            function deleteList() {
                todoList.removeChild(li);
                li.removeChild(button);
                count = 0;
            }

            if (count === 0) {
                doneList();
                count++;
            } else {
                deleteList();
            }
        }
    }
    
    input.value = '';
}

