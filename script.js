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

    const render = () => {

        let htmlString= "";

        for(const task of tasks) {
            htmlString += `
            
            <li>
            ${task.content}
            </li>
            `;
          };
            document.querySelector(".js-tasks").innerHTML=htmlString;    
          

    };

    const intit = () => {
        render();

    };

    intit();

}