document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
  
    addTaskButton.addEventListener('click', () => {
      addTask();
    });
  
    taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addTask();
      }
    });
  
    function addTask() {
      const taskText = taskInput.value.trim();
  
      if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
  
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.addEventListener('click', () => toggleComplete(taskSpan));
  
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete-btn');
        completeButton.addEventListener('click', () => toggleComplete(taskSpan));
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', () => deleteTask(taskItem));
  
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);
  
        taskList.appendChild(taskItem);
        taskInput.value = '';
      }
    }
  
    function toggleComplete(taskSpan) {
      taskSpan.classList.toggle('completed');
      taskSpan.style.textDecoration = taskSpan.style.textDecoration === 'line-through' ? 'none' : 'line-through';
    }
  
    function deleteTask(taskItem) {
      taskItem.classList.add('fade-out');
      setTimeout(() => {
        taskList.removeChild(taskItem);
      }, 500);
    }
  });
  