// global variables
// reference dayjs
var today = dayjs();

// // time and text 
var timeBlock = document.querySelector(".container");
$(function () {
  // display current date and time 
  $("#currentDate").text(today.format("dddd, MMMM DD YYYY, h:mm a"));
  console.log(currentDate);

  // event listener for saveBtn click
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save to local storage
    localStorage.setItem(time, text);
  });

  // items in local storage
  $('#hour9 .description').val(localStorage.getItem('9am'));
  $('#hour10 .description').val(localStorage.getItem('10am'));
  $('#hour11 .description').val(localStorage.getItem('11am'));
  $('#hour12 .description').val(localStorage.getItem('12pm'));
  $('#hour13 .description').val(localStorage.getItem('1pm'));
  $('#hour14 .description').val(localStorage.getItem('2pm'));
  $('#hour15 .description').val(localStorage.getItem('3pm'));
  $('#hour16 .description').val(localStorage.getItem('4pm'));
  $('#hour17 .description').val(localStorage.getItem('5pm'));

  // function to change color for past, present, future
  function auditTask() {
    var currentHour = today.hour();

    // loop over each time block
    $('.time-block').each(function () {
      var timeId = parseInt($(this).attr("id").split("hour")[1]);

      // if statement for past
      if (timeId < currentHour) {
        $(this).addClass("future");
      }

      // if statement for present
      else if (timeId === currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }

      // if statement for future
      else {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
    })};

    // audit task function
    auditTask();

    // clear current url
    setTimeout(function () {
      location = "";
    }, 1000 * 60);

  });