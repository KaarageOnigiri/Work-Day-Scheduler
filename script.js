$(function () {
  
  var text;
  // setting up local storage
  for (x=0, i=9; x<$(".time-block").length; x++, i++) {
    if (localStorage.getItem("hour-"+[i]) === null){
      localStorage.setItem("hour-"+[i], "");
    }
    text = localStorage.getItem("hour-"+[i]);
    $("#hour-"+[i]).children("textarea").text(text);
  }

  $(".saveBtn").on("click", function() {
    // identify which one was clicked and save accordingly
    for (x=0, i=9; i>=9 && i<=17; x++, i++) {
      if($(this).parent().attr("id") === $("#hour-" + [i]).attr("id")) {
        localStorage.setItem("hour-"+[i], $(this).siblings(".description").val());
        $(this).siblings(".description").val()
      }
    }
  })
  // testing
  console.log(dayjs().format("MMM D, YYYY | dddd | h:mm:ss a | HH:mm"));
  console.log(dayjs().format("HH")); 
  // changed the string to number so they can be compared
  var currentMilitaryHour = parseInt(dayjs().format("HH")) ;

  for (x=0, i=9; i>=9 && i<=17; x++, i++) {
    var hour = $("#hour-"+[i]).attr("id").split("-")[1];
    if (hour < currentMilitaryHour) {
      console.log("<");
      $("#hour-"+[i]).children("textarea").addClass("past");
    }
    if (hour > currentMilitaryHour) {
      console.log(12, ">", currentMilitaryHour);
      $("#hour-"+[i]).children("textarea").addClass("future");
    }
    if (hour === currentMilitaryHour) {
      console.log("=");
      $("#hour-"+[i]).children("textarea").addClass("present");
    }
  }
  // clearing the whole page but not saving them
  $("#clear").on("click", function() {
    for (x=0, i=9; i>=9 && i<=17; x++, i++) {
      $("textarea").text("");
    }
  })
  // show time
  var currentTime = setInterval(function() {
    $("#currentDay").text(dayjs().format("ddd, MMM D YYYY h:mm:ss a"));
  }, 100);
});
