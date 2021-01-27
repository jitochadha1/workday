$(document).ready(function () {
     
  
    function updateTime() {
      let currentTime = $('#currentDay');
      currentTime.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
      
      
    }
  
    function formatCalendar() {
      for (let i = 9; i <= 17; i++) {
        formatTimeBlock(i);
      }
    }
  
    function formatTimeBlock(hour) {
      let timeBlock = $(`#time-block-${hour}`);
      let currentHour = new Date().getHours();
      if (hour < currentHour) {
        timeBlock.addClass('past');
      } else if (hour < currentHour + 1) {
        timeBlock.addClass('present');
      } else {
        timeBlock.addClass('future');
      }
    }
  
    function handleSaveEvent(hour) {
      let newTaskDetails = $(`#time-block-${hour} textarea`).val();
      tasks = tasks.map(function (task) {
        if (task.hour === hour) {
          let newTask = task;
          newTask.taskDetails = newTaskDetails;
          return newTask;
        } else {
          return task;
        }
      });
      saveTasks();
      displayTasks();
    }
  
    function initializeSaveButtons() {
      for (let i = 9; i <= 17; i++) {
        $(`#time-block-${i} button`).click(function () {
          handleSaveEvent(i);
        });
      }
    }
  
    function loadTasks() {
      tasks = JSON.parse(localStorage.getItem('tasks'));
      if (!tasks || tasks.length === 0) {
        tasks = [];
        for (let i = 9; i <= 17; i++) {
          tasks.push({ hour: i, taskDetails: '' });
        }
      }
    }
  
    function displayTasks() {
      for(let task of tasks) {
        $(`#time-block-${task.hour} textarea`).text(`${task.taskDetails}`)
      }
    }
  
    function initializeTasks() {
      loadTasks();
      displayTasks();
    }
  
    function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    formatCalendar();
    updateTime();
    setInterval(updateTime, 1000);
    initializeSaveButtons();
    initializeTasks();
  });
  