// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

console.log($(".time-block"));
console.log($(".time-block").attr("id"));
console.log();
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // for (x=0; x<9; x++) {
  //   console.log(x);
  //   $(".saveBtn").eq(x).on("click", function(event) {
  //     console.log(x);
  //   })
  // }
  
  $(".saveBtn").on("click", function(event) {
    // console.log($(this).siblings(".description").val());
    // // this works
    // console.log($(this).parent("#hour-" + [9]));
    console.log($(this).parent().attr("id"));

    // for (i=9, x=0; i>=9 && i<=17; i++, x++) {
    //   console.log("for loop");
    //   if($(this) === $(".saveBtn").eq(0)) {
    //     console.log("hour-" + [i]);
    //   }
    // }
    // $(this).parent;
    // localStorage.setItem($(this).siblings(".description").val())
  })
  
  dayjs()

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // TODO: Add code to display the current date in the header of the page.
  var currentTime = setInterval(function() {
    $("#currentDay").text(dayjs());
  }, 100)
  
});

// parse int (switching to number from string)

// var x = "hour-14";
// undefined
// x.split("")
// (7) ['h', 'o', 'u', 'r', '-', '1', '4']
// x.split("-")
// (2) ['hour', '14']
// x.split("-")[1]
// '14'