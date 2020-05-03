$(document).ready(function () {

    var a = moment().format("MMMM Do YYYY");    
    $("#currentDay").append(a);

    var clock  = [9, 10, 11, 12, 1, 2, 3, 4, 5];
    for (var i = 0; i < clock.length; i++) {
        var line = $("<row>");
        $(".container").append(line);}

    var column = $("</col>");
    var newColumn = $("</col>");
    $(".container").append(column)
    column.atrr("class","col-2 time");
    newColumn.atrr("class", "col-9 task")
    
    if(clock[i]> 8){
        column.text(clock[i] + "AM");
    else if (clock[i]=12 || clock[i]> 12){
        column.text(clock[i] + "PM")
    }

    var saveBtn = $("<button>");
    saveBtn.atrr("id", "saveBtn fas fa-save col-1");
    document.getElementById("saveBtn").addEventListener("click", function(event){
        event.preventDefault()
      });


    });