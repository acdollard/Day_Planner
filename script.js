
 
let dateTime = "";
    date = ""; 


let update = function () {
    date = moment(new Date())
    dateTime.text(date.format("MM-DD-YYYY , hh:mm:ss a")); 
     
}

$(document).ready(function() {
    dateTime = $("#currentDay");
    update();
    setInterval(update, 1000);

    
    





})


