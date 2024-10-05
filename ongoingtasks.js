$(document).ready(function () {
  var loggedInUserEmail = localStorage.getItem("loggedInUserEmail");
  if (!loggedInUserEmail ) {
    location.href = "./SignIn.html";
  }


  var tasksTable = $("#myTasks");
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.filter(task => task.status != "completed" && (task.createdBy == loggedInUserEmail || task.email == loggedInUserEmail)).forEach(function (task) {
    var tr = $('<tr>');
    ['id', 'title', "description", "lastdate", "taskType", "email", "createdBy", "updateStatus"].forEach(function (attr) {
      if (attr == "updateStatus") {
        tr.append('<td><input type="button" value="Update Status" class="insideFormButtons" onClick="UpdateTask(' + task["id"] + ')"></td>');
      } 
      else {
        tr.append('<td>' + task[attr] + '</td>');
      }
    });
    tasksTable.append(tr);
  });


});

function UpdateTask(taskId) {
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.map(task => task.id != taskId ? task : { ...task, status: "completed" , completionDate:  new Date() })  
  localStorage.setItem("tasks", JSON.stringify(tasks));
location.reload();
}