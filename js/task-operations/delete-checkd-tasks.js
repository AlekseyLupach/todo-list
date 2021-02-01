function deleteCheckedTasks(event) {
    //ищем все li у которых класс checked 
    const checkedTask = document.querySelectorAll("li.checked");

    checkedTask.forEach((checkedTask) => {
        checkedTask.remove();
    })
}

export default deleteCheckedTasks;