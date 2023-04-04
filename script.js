{
    const tasks = [
        {
            content: "umyć okna",
            done: true,
        },
        {
            content: "kupić żwirek",
            done: false,
        },
    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();
    }

    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    }

    const toggleTaskDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    }

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

    const render = () => {

        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            
            <li class="list__item${task.done ? " list__item--done" : ""}">

       <button class="js-done tasks__buton tasks__button--toggleDone">        
           ${task.done ? "✔" : ""}
         </button>
           
            ${task.content}
            <button class="js-remove"> <img class="tasks__button--remove" src="images/bin.png"/> </button>
            </li>
            `;
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    }

    const intit = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);

    }

    intit();

}