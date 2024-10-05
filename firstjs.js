
$(document).ready(function () {
    var loggedInUserEmail = localStorage.getItem("loggedInUserEmail");
    if (!loggedInUserEmail) {
        location.href = "./SignIn.html";
    }
});

function Home() {
    location.href = "./Home.html";
}

function submit() {
    var title = document.getElementById("title").Value;
    var description = document.getElementById("description").Value;

}
function Ongoing() {
    location.href = "./Ongoingtasks.html";
}
function Done() {
    location.href = "./Done.html";
}
function Logout() {
    location.href = "./SignUp.html";
    localStorage.setItem("loggedInUserEmail", null);


}
function replace1(isReplaceForm = true) {
    document.getElementById("div1").style.display = "block";
    document.getElementById("div2").style.display = "none";
    $("#createTask").show();
    $("#afterLoadData").hide();
    $("#delete").hide();

    if (isReplaceForm) {
        resetCreateForm();
        hideError();

    }

}
function replace2() {
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "block";
}
function show() {
    $("#email").show();
}
function hide() {
    $("#email").hide();
}
function createtask() {

    // Get data in object
    var taskType = $('input[name="taskType"]:checked').val();
    var loggedInUserEmail = localStorage.getItem("loggedInUserEmail");

    var taskdetail = {
        id: Date.now(),
        title: $("#title").val(),
        description: $("#description").val(),
        lastdate: $("#lastdate").val(),
        taskType: taskType,
        email: taskType == "group" ? $("#email").val() : "",
        createdBy: loggedInUserEmail,
        status: "pending", 
        completionDate: null,      
    }

    // Validate task detail data
    var isValid = validateCreateTask(taskdetail);
    if (!isValid) {
        console.log("form has some errors");
        return;
    }

    // Save data to local storage
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    localStorage.setItem("tasks", JSON.stringify([...tasks, taskdetail]));

    // Clear the form
    resetCreateForm();
}
function validateCreateTask(taskdetail) {

    var isDetailValid = true;
    if (!taskdetail.title) {
        $("#error").html("Please Enter Task Title").show();
        isDetailValid = false;
    }
    else {
        $("#error").hide();
    }

    if (!taskdetail.lastdate) {
        $("#error2").html("Please Enter Last Date for the Task").show();
        isDetailValid = false;
    }
   else if (new Date(taskdetail.lastdate) < new Date()) {
        $("#error2").html("Last date must be gretater then current date.").show();
        isDetailValid = false;
    }
    else {
        $("#error2").hide();
        isDetailValid = isDetailValid == false ? false : true;
    }

    if (taskdetail.taskType == "group") {
        let enteredEmail = $("#email").val();
        let loggedInUserEmail = localStorage.getItem("loggedInUserEmail");
        if (!taskdetail.email) {
            $("#error1").html("Please Enter Email").show();
            isDetailValid = false;
        }
        else if (!isEmailExist(taskdetail.email)) {
            $("#error1").html("Email does not exist.").show();
            isDetailValid = false;
        }
        else if (loggedInUserEmail == enteredEmail) {
            $("#error1").html("You Can't Enter Own Mail.").show();
            isDetailValid = false;
        }
        else {
            $("#error1").hide();
            isDetailValid = isDetailValid == false ? false : true;
        }
    }
    return isDetailValid;
}


function isEmailExist(email) {
    var users = JSON.parse(localStorage.getItem("users"));
    return users && !!(users.find(x => x.email == email));
}

function resetCreateForm() {
    $("#title").val("");
    $("#description").val("");
    $("#lastdate").val("");
    $("#email").val("");
    $("#search").val("");
}
function loadData() {
    var taskId = $("#search").val();

    if (taskId == "") {
        $("#loadError").html("Please Enter any ID").show();

    }
    else if (isNaN(taskId)) {
        $("#loadError").html("Please Enter only Numbers").show();
    }
    else if (!gettask(taskId)) {
        $("#loadError").html("Please Enter Valid ID").show();
    }
    else if (gettask(taskId).status == "completed") {
        $("#loadError").html("You can't edit Done Task").show();
    }
        else if (gettask(taskId)) {
        var taskdetail = gettask(taskId);
        $("#title").val(taskdetail.title);
        $("#description").val(taskdetail.description);
        $("#lastdate").val(taskdetail.lastdate);
        $('#' + taskdetail.taskType).prop('checked', true);
        if (taskdetail.taskType == "group") {
            $("#email").val(taskdetail.email).show()
        }
        else {
            $("#email").val("");
            $("#email").val(taskdetail.email).hide();
        }
        replace1(false);
        hideError();
        $("#createTask").hide();
        $("#afterLoadData").show();
        $("#delete").show();


    }
    else {
        $("#loadError").hide();
    }

}
function hideError() {
    $("#error").hide();
    $("#error1").hide();
    $("#error2").hide();
}
function gettask(taskId) {
    var tasks = JSON.parse(localStorage.getItem("tasks"));
    return tasks && (tasks.find(x => x.id == taskId));
}

function updateTaskDetail() {
    var taskType = $('input[name="taskType"]:checked').val();

    var taskdetail = {
        id: $("#search").val(),
        title: $("#title").val(),
        description: $("#description").val(),
        lastdate: $("#lastdate").val(),
        taskType: taskType,
        email: taskType == "group" ? $("#email").val() : ""
    }

    // Validate task detail data
    var isValid = validateCreateTask(taskdetail);
    if (!isValid) {
        return;
    }

    // Save data to local storage
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.map(task => task.id != taskdetail.id ? task : { ...task, ...taskdetail });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    resetCreateForm();
}
function deleteTask() {
    let taskId = $("#search").val();
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(x => x.id != taskId)
    localStorage.setItem("tasks", JSON.stringify(tasks));
    resetCreateForm();
}
