import listsTemplate from '../templates/pages/lists/index.js'
import addList from '../list-operations/add-list.js'
import listsList from '../lists-list.js'
import createList from '../list-operations/add-list.js'

function renderLists() {
    const rootDiv = document.querySelector('.container');

    rootDiv.innerHTML = listsTemplate;

    const addListForm = document.querySelector('.add-form > form');

    addListForm.addEventListener('submit', addList);

    listsList.lists.forEach((list) => {
        createList(list);
    });
}

export default renderLists;