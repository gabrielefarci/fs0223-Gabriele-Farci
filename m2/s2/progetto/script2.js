// languages

let buttonLanguages = document.getElementById('btn-languages');
buttonLanguages.addEventListener('click', showHideLanguages);

let listLanguages = document.getElementById('list-languages');
listLanguages.style.display = 'none';

function showHideLanguages() {

    if(listLanguages.style.display === 'none') {
        listLanguages.style.display = 'block';
    } else {
        listLanguages.style.display = 'none';
    }

}