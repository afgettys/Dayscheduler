$(document).ready(function () {
    //from moment.js
    var a = moment().format("MMMM Do YYYY");
    $("#currentDay").append(a);
    //creating var for text area and setting attr
    //var task = $("<textarea>");
    //blocktimes
    var clock = [9, 10, 11, 12, 1, 2, 3, 4, 5];
    var body = document.getElementById("body");
    for (var i = 0; i < clock.length; i++) {
      //creating row and appending it to the container
      var line = $("<div>");
      line.addClass("row")
      $(".container").append(line);
      // need 3 columns and 9 rows
      // creating new columns on container
      var column1 = $("<div>");
      var column2 = $("<div>");
      var column3 = $("<div>");
      column1.addClass("col-md-1");
      column2.addClass("col-md-10");
      column3.addClass("col-md-1");
      line.append(column1, column2, column3);
      //setting attr to columnm
      column1.attr("id", "time");
      column2.attr("id", "text");
      //if clock index is greater than 8, set as am
      if (clock[i] > 8 && clock[i] !==12) {
        column1.text(clock[i] + "AM");
      }
      //  but if clock index is equal or greater than 12, set as pm
      else if (clock[i] === 12 || clock[i] < 8) {
        column1.text(clock[i] + "PM");
      }
      // creating save button with fontawesome <i class="far fa-save"></i>
      // need to add button for each row
      var record = $("<button>");
      record.addClass("btn saveBtn");
      var icon = $("<i>");
      icon.addClass("far fa-save");
      record.append(icon)
      column3.append(record)
      //adding prevent default so page will not reload once save button is clicked
      //   document.getElementById("record").addEventListener("click", function (event) {
      //     event.preventDefault();
      //   });
      // to keep task info on text area even after page is reloaded
      //localStorage.setItem(clock, task);
    }
  });