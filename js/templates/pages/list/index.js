const template = `
  <div class="add-form">
  <h3 class="add-form_name">TODO-LIST</h3>
    <form>
      <input type="text" name="text" placeholder="Enter task..." />
      <button type="submit"><i class="fas fa-plus"></i></button>
    </form>
  </div>

  <div class="todo-list">
    <ol></ol>
  </div>

  <div class="delete-checked-wrapper">
    <button class="delete-checked-btn">Delete Checked</button>
  </div>
`;

export default template;
