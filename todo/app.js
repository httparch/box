
let textfield = document.querySelector('.inputText');
let calendar = document.querySelector('.calendar');

//button

let addButton = document.querySelector('.add-button');
let container = document.querySelector('.todo-container');

//array

const myArray = [];

function displayItem(){
    let lists = ``;

    myArray.forEach((value, index) => {
        const {text, date} = value;  
        let html = `<p>${text} ${date} <button class="delete-button"> delete </button></p>`;
        lists += html;
    })

    container.innerHTML = lists;

    let deleteButton = document.querySelectorAll('.delete-button');

    deleteButton.forEach((value, index) => {
        value.addEventListener('click', () => {
            myArray.splice(index, 1);
            displayItem();
        })
    })

}

function addItemIntoArray(){
    let text = textfield.value;
    let date = calendar.value;

    myArray.push({text, date});
    textfield.value = ``;

    displayItem();
}


addButton.addEventListener('click', () => addItemIntoArray());