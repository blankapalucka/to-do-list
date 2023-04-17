{
    let tasks = [];
    let hideDoneTasks = false;

    const addNewTask = (newTaskContent) => {
        tasks = [
            ...tasks,
            { content: newTaskContent },
        ]

        render();
    }

    const removeTask = (index) => {
        tasks =
            [
                ...tasks.slice(0, index),
                ...tasks.slice(index + 1)
            ];
        render();
    };

    const toggleTaskDone = (index) => {
        tasks =
            [
                ...tasks.slice(0, index),
                { ...tasks[index], done: !tasks[index].done },
                ...tasks.slice(index + 1)
            ];
        render();
    };
    //     // tasks = tasks.map
    //     tasks[index].done = !tasks[index].done;
    //     render();
    // }

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");
        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });

    }

    const renderTasks = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
        <li class="tasks__item${task.done && hideDoneTasks ? " tasks__item--hidden" : ""}">
            <button class="js-done tasks__buton tasks__button--toggleDone">        
                ${task.done ? "✔" : ""}
            </button>
            <span class="${task.done ? " tasks__content--done" : ""}">
                ${task.content}
            </span>
            <button class="js-remove tasks__button--remove">🗑️</button>
        </li>
        `;
        };
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const renderButtons = () => {

    };

    const bindButtonsEvents = () => {
        const toggleAllTasksDoneButton = document.querySelector(".js-toggleAllTasksDone");
        toggleAllTasksDoneButton.addEventListener("click", () => {
            for (const task of tasks) {
                task.done = true;
            }
            render();
        });

        const hideDoneTasksButton = document.querySelector(".js-hideDoneTasks");
        hideDoneTasksButton.addEventListener("click", () => {
            hideDoneTasks = !hideDoneTasks;
            render();
        });
    };
    // / powinien być tutaj event Listener i if/

    const render = () => {
        renderTasks();
        renderButtons();

        bindEvents();
        // bindButtonsEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskElement = document.querySelector(".js-newTask");
        const newTaskContent = newTaskElement.value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskElement.value = "";
        }
        newTaskElement.focus();
    }

    const intit = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
        bindButtonsEvents();
    }

    intit();
}