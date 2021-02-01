import taskList from '../tasks.js'
import storageService from '../storage-service.js';

function deleteTask(event) {
    const deleteBtn = event.target.closest('.delete-btn');

    const taskId = parseInt(deleteBtn.parentNode.id.split('-')[1], 10);

    taskList.delete(taskId);
    if (!deleteBtn) {
        return
    }
    deleteBtn.parentElement.remove();

    storageService.set('tasks', JSON.stringify(taskList.tasks));
}

export default deleteTask