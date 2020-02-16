
const container = document.body.appendChild(document.createElement('div'));
container.setAttribute('id', 'container');

let url = 'https://jsonplaceholder.typicode.com/todos';

let formEl = container.appendChild(document.createElement('form'));

let inputEl = formEl.appendChild(document.createElement('input'));
inputEl.setAttribute('id', 'input');




let buttonEl = formEl.appendChild(document.createElement('button'));
buttonEl.innerText = 'send title';

fetch(url)
    .then(response => response.json())
    .then(commits => {
        commits.forEach(function (commits) {
            let commitsId = commits.id
            let divEl = container.appendChild(document.createElement('div'));
            let emEl = divEl.appendChild(document.createElement('em'));
            divEl.setAttribute('data-id', commitsId);

            divEl.innerText = commits.title;
            container.appendChild(divEl);
            //divEl.setAttribute('click', deleteEl);
            divEl.addEventListener("click", removeTag);

        });

    });

const removeTag = function (event) {
    event.target.remove();
};

buttonEl.addEventListener('click', function () {
    let userTitle = document.getElementById('input').value;
    console.log(userTitle);
});

