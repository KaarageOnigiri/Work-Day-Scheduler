// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the ht
for (x=0, i=9; i>=9 && i<=17; x++, i++) {
  console.log(typeof parseInt($("#hour-"+[i]).attr("id").split("-")[1]));
}
console.log("Current Military Hour:", dayjs().format("HH"));


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var text;
  for (x=0, i=9; x<$(".time-block").length; x++, i++) {
    if (localStorage.getItem("hour-"+[i]) === null){
      localStorage.setItem("hour-"+[i], "");
    }
    text = localStorage.getItem("hour-"+[i]);
    $("#hour-"+[i]).children("textarea").text(text);
  }

  $(".saveBtn").on("click", function() {
    for (x=0, i=9; i>=9 && i<=17; x++, i++) {
      if($(this).parent().attr("id") === $("#hour-" + [i]).attr("id")) {
        // test
        console.log($("#hour-"+[i]).attr("id"));
        localStorage.setItem("hour-"+[i], $(this).siblings(".description").val());
        $(this).siblings(".description").val()
      }
    }
  })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  console.log(dayjs().format("MMM D, YYYY | dddd | h:mm:ss a | HH:mm"));
  console.log(dayjs().format("HH"));

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

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // TODO: Add code to display the current date in the header of the page.
  var currentTime = setInterval(function() {
    $("#currentDay").text(dayjs().format("ddd, MMM D YYYY h:mm:ss a"));
  }, 100);
});
