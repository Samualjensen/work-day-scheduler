// global variables
// reference dayjs
var today = dayjs();

// // time and text 
var timeBlock = document.querySelector(".container");
$(function() {
// display current date and time 
$("#currentDate").text(today.format("dddd, MMMM DD YYYY, h:mm a"));
console.log(currentDate);

// event listener for saveBtn click
$(".saveBtn").on("click", function() {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  // save to local storage
  localStorage.setItem(time, text);
});

// items in local storage
$('#9am .description').val(localStorage.getItem('9am'));
$('#10am .description').val(localStorage.getItem('10am'));
$('#11am .description').val(localStorage.getItem('11am'));
$('#12pm .description').val(localStorage.getItem('12pm'));
$('#1pm .description').val(localStorage.getItem('1pm'));
$('#2pm .description').val(localStorage.getItem('2pm'));
$('#3pm .description').val(localStorage.getItem('3pm'));
$('#4pm .description').val(localStorage.getItem('4pm'));
$('#5pm .description').val(localStorage.getItem('5pm'));

// function to change color for past, present, future
function auditTask() {
  var currentHour = today.hour();

  // loop over each time block
  $('.time-block').each(function () {
    var timeId = parseInt($(this).attr("id").split("hour")[1]);

    // if statement for past
    if (timeId < currentHour) {
      $(this).addClass("past");
    }

    // if statement for present
    else if (timeId === currentHour) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    }

    // if statement for future
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
    });

    // audit task function
    auditTask();
    
    // clear current url
    setTimeout(function() {
      location = "";
    }, 1000 *60);
}});