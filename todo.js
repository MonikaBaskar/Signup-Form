document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.querySelector("button");
    const input = document.querySelector("input");
    const todoList = document.querySelector(".todo-list");

    addButton.addEventListener("click", function () {
        if (input.value !== "") {
            const taskItem = document.createElement("div");
            taskItem.className = "todo-item";
            taskItem.style.backgroundColor = getRandomColor();

            const taskText = document.createElement("span");
            taskText.textContent = input.value;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";

            deleteButton.addEventListener("click", function () {
                taskItem.remove();
            });

            taskItem.appendChild(taskText);
            taskItem.appendChild(deleteButton);

            todoList.appendChild(taskItem);
            input.value = "";
        }
    });

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});

