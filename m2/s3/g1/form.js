let petNameInputField = document.getElementById('petName');
let ownerNameInputField = document.getElementById('ownerName');
let speciesInputField = document.getElementById('species');
let breedInputField = document.getElementById('breed');

let pets = [];

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    static compareOwner = function (pet1, pet2) {
        return pet1.ownerName === pet2.ownerName; 
    }
}

const createList = function() {
    let listReference = document.getElementById('pets-list');

    listReference.innerHTML = '';

    pets.forEach((pet, i) => {
        let newListItem = document.createElement('li');
        newListItem.innerText = 'Il nome dell\'animale è ' + pet.petName + ', è un ' + pet.species + ', la razza è ' + pet.breed + ' e il nome del proprietario è ' + pet.ownerName;

        Pet.compareOwner(pet, pets[i - 1] ? pets[i - 1] : {});

        listReference.appendChild(newListItem);
    })
}

let formReference = document.querySelector('form');
formReference.addEventListener('submit', (e) => {
    e.preventDefault()

    let petFromTheForm = new Pet(petNameInputField.value, ownerNameInputField.value, speciesInputField.value, breedInputField.value)
    console.log(petFromTheForm);

    pets.push(petFromTheForm);

    petNameInputField.value = '';
    ownerNameInputField.value = '';
    speciesInputField.value = '';
    breedInputField.value = '';

    createList();
})