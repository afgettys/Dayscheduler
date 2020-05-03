$(document).ready(function () {

    var a = moment().format("MMMM Do YYYY");    
    $("#currentDay").append(a);

    var clock  = [9, 10, 11, 12, 1, 2, 3, 4, 5];
    for (var i = 0; i < clock.length; i++) {
        var line = $("<row>");
        $(".container").append(line);}
    // creating new columns on container 
    var column = $("</col>");
    var newColumn = $("</col>");

    $(".container").append(column)
    column.atrr("class","col-2 time");
    newColumn.atrr("class", "col-9 task")
    //if clock index is greater than 8, set as am
    if(clock[i]> 8){
        column.text(clock[i] + "AM");}
        //  but if clock index is equal or greater than 12, set as pm
    else if(clock[i]=12 || clock[i]> 12){
        column.text(clock[i] + "PM")
    }
 // creating save button with fontawesome <i class="far fa-save"></i>
    var saveBtn = $("<button>");
    saveBtn.atrr("id", "saveBtn far fa-save col-1");
    //adding prevent default so page will not reload once save is clicked
    document.getElementById("saveBtn").addEventListener("click", function(event){
        event.preventDefault()
      });



    localStorage.setItem
    

    });