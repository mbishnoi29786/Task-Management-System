$(document).ready(function () {
    var loggedInUserEmail = localStorage.getItem("loggedInUserEmail");
    if (!loggedInUserEmail ) {
        location.href = "./SignIn.html";
    }


    var tasksTable = $("#myTasks");
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.filter(task => task.status == "completed" && (task.createdBy == loggedInUserEmail || task.email== loggedInUserEmail)).forEach(function(task) {
        var tr = $('<tr>');
        ['id', 'title',"description","lastdate","taskType","email","createdBy", "completionDate", "handedIn"].forEach(function(attr)   {
          if(attr == "handedIn"){
            console.log("Completion Time: ",new Date(task.completionDate));
           if(new Date(task.completionDate) > new Date(task.lastdate)){
            tr.append('<td>Late</td>')
           }
           else{
            tr.append('<td>On Time</td>')

           }
        }
         else{
          tr.append('<td>' + task[attr] + '</td>');
         }
        }); 
        tasksTable.append(tr);
      });
});

 