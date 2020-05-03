$(document).ready(function () {

    var a = moment().format("MMMM Do YYYY");    

    $("#currentDay").append(a);

    var clock  = [9, 10, 11, 12, 1, 2, 3, 4, 5];
    for (var i = 0; i < clock.length; i++) {
        var line = $("<row>");
        $(".container").append(line);


        
  
  