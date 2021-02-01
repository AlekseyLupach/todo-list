import taskList from '../tasks.js';
import { getId } from '../utils.js';
import storageService from '../storage-service.js';

function deleteTask(event) {
  const { parentNode } = event.target.closest('.delete-btn');

  const taskId = getId(parentNode);

  taskList.delete(taskId);

  parentNode.remove();

  storageService.set('tasks', JSON.stringify(taskList.tasks));
}

export default deleteTask;
