// функция которая зачеркивает выполненое дело
function checkTask(event) {
    // const target = event.target;
    const { target } = event;
    const { parentNode: li, checked } = target; // заменяет две строчки снизу

    // const checked = target.checked;
    // const li = target.parentNode;
    // так мы находим и получаем наш li при помощи parentNode; можем удалить из за строчки выше
    // const li = target.parentNode;

    // если галочка стоит мы зачеркиваем событие
    if (checked) {
        li.classList.add('checked');
        // если галочку снимаем событие не зачеркнуто
    } else {
        li.classList.remove('checked');
    }
}


export default checkTask
