let nameInputField = document.getElementById('name');
let btnSave = document.getElementById('btn-save'); 
let btnRemove = document.getElementById('btn-remove');
let listReference = document.getElementById('list-name');

let names = [];

const createList = function() {
            
listReference.innerHTML = '';

names.forEach((name) => {

    let newListItem = document.createElement('li');

    newListItem.innerText = name;
    
    if(names.includes(name)) {
            listReference.appendChild(newListItem);
        }
})
}

btnSave.addEventListener('click', saveName)

function saveName(e) {
    e.preventDefault();

    let nameToSave = nameInputField.value;
            
    if(nameInputField.value != '') {
        localStorage.setItem('Name', nameToSave);
        names.push(nameToSave);
    }

    console.log(names);

    nameInputField.value = '';

    createList();
}
            

btnRemove.addEventListener('click', removeName)

function removeName(e) {
    e.preventDefault();

    localStorage.removeItem('Name');

}