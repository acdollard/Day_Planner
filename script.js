
 
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

    
    console.log(moment().format("HH"));

    console.log(moment(new Date()));




$(".row").on("click", function(){
   if(event.target.matches("button"))
   {
       debugger; 
       console.log($(this.childNodes[3].innerHTML));
   }
});



})


