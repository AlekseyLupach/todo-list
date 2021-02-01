import checkTask from './checkTask.js'
import editTask from './edit-task.js'
import taskList from '../tasks.js'

const todoList = document.querySelector('.todo-list ol')
// создаем пустой массив в котором будут храниться наши все дела
let tasks = [];

function generateId(tasks) {
    // получаем массив со всеми идентификаторами тасков
    const ids = tasks.map(task => {
        return task.id;
    });

    // если у нас пустой массив начинаем нумерацию с еденицы
    if (!ids.length) {
        return 1;
    }

    // находим максимальный id
    const maxId = Math.max(...ids);


    // возвращаем новый который больше максимального на единицу
    return maxId + 1;
}

export default function addTask(event) {
    // cброс стандартного поведения отправки формы(удаляет обновление страницы и лишний текст в адресной строке)
    // если у кого либо элемента есть поведение по умолчанию как у инпута оно его не будет выполнять а будет выполнять только то что мы прописали
    // у импута поведение обновляется страница при нажатии и текст в адресной строке. этим мы обновление убираем
    event.preventDefault();

    // получаем все поля формы
    const formData = new FormData(event.target);
    //получаем текст из инпута
    // получить какое либо значение мы можем через метод гед куда мы передаем имя поля(input)
    const todoText = formData.get('text');

    // у нас есть проблема когда мы нажимаем на + снова без текста то создается просто две кнопки. так нельзя решаем ее вот так
    if (!todoText) {
        return;
    }
    // при добавлении мы создаем новый объект ктороый представляет собой нашу задачу и добавляем ее на наш массив
    const newTask = {
        id: generateId(taskList.tasks),
        text: todoText,
        checked: false
    }

    taskList.add(newTask);

    // создаем li
    const newTodo = document.createElement('li');

    newTodo.setAttribute('id', `${newTask.id}`);

    // вставляем li в ol
    todoList.appendChild(newTodo);

    newTodo.innerHTML = `<input type="checkbox" id=${newTask.id}>
    <span>${todoText}</span>
    <button id=${newTask.id}edit class="edit-btn"><i class="fa fa-edit fa-lg" aria-hidden="true"></i></button>
    <button  class="delete-btn"><i class="fa fa-trash fa-lg" aria-hidden="true"></i></button>`

    const checkbox = document.getElementById(`${newTask.id}`);
    const editBtn = document.getElementById(`${newTask.id}edit`)

    checkbox.addEventListener('change', checkTask);
    editBtn.addEventListener('click', editTask);
    // возвращает форму в ее исходное положение и чистит ее от текста при нажатии на +
    event.target.reset();

    // преобразуем массив в строку при помощи JSON.stringify
    localStorage.setItem('tasks', JSON.stringify(taskList.tasks));
}
