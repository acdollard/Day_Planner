


$(document).ready(function() {

let today = moment().format("MM-DD-YYYY")
$("#currentDay").text("Today's date: " + today);

    
$(".saveBtn").on("click", function(event) {
    btnID = event.target.id; 
    text = $("#" + btnID + "text").val();
    localStorage.setItem(btnID, text);
})


//function to set val() of textareas by pulling from local storage 
function resetText() {
    $("#9amtext").val(localStorage.getItem("9am"));
    $("#10amtext").val(localStorage.getItem("10am"));
    $("#11amtext").val(localStorage.getItem("11am"));
    $("#12pmtext").val(localStorage.getItem("12pm"));
    $("#1pmtext").val(localStorage.getItem("1pm"));
    $("#2pmtext").val(localStorage.getItem("2pm"));
    $("#3pmtext").val(localStorage.getItem("3pm"));
    $("#4pmtext").val(localStorage.getItem("4pm"));
    $("#5pmtext").val(localStorage.getItem("5pm"));

}
resetText();

let time_blocks = $(".time-block");
let texterClass = $(".texter");


function colorCode(){
    for(let i=0 ; i<time_blocks.length; i++){

    let thisHour = $(time_blocks[i]);
    let thisSpecificHour = thisHour.attr("id"); 
console.log(thisSpecificHour)
    let thisHoursText = $(texterClass[i]);
    let thisHoursTextID = thisHoursText.attr("id");
    console.log(thisHoursText);
    console.log(thisHoursTextID);


    console.log(thisHour); 
    if(moment().hour() < thisSpecificHour){
        $("#" + thisHoursTextID).css({"background-color":"mediumseagreen" , "color":"white"})
    }      
       else if(moment().hour() > thisSpecificHour){
            $("#" + thisHoursTextID).css({"background-color":"tomato" , "color":"white"})
        }
           else if(moment().hour() == thisSpecificHour){
                $("#" + thisHoursTextID).css({"background-color":"cornflowerblue" , "color":"white"})
            };
   }
}
    colorCode();


        

    // if (moment().isBefore(moment(today + " 09:00"))){
    //     $("#9amtext").css({"background-color":"mediumseagreen" , "color":"white"});
    // } else if(moment().isAfter(moment(today + " 09:00"))){
    //     $("#9amtext").css({"background-color":"tomato" , "color":"white"})
    // } else if(moment().hour().isSame("9")){
    //     $("#9amtext").css({"background-color":"cornflowerblue" , "color":"white"})
    // };

    // if (moment().hour() < 10){
    //     $("#10amtext").css({"background-color":"mediumseagreen" , "color":"white"});
    // } else if(moment().hour() > 10){
    //     $("#10amtext").css({"background-color":"tomato" , "color":"white"})
    // } else if(moment().hour() == 10){
    //     $("#10amtext").css({"background-color":"cornflowerblue" , "color":"white"})
    // };

    // if (moment().isBefore(moment(today + " 11:00"))){
    //     $("#11amtext").css({"background-color":"mediumseagreen" , "color":"white"});
    // } else if(moment().isAfter(moment(today + " 11:00"))){
    //     $("#11amtext").css({"background-color":"tomato" , "color":"white"})
    // } 

    // if (moment().isBefore(moment(today + " 12:00"))){
    //     $("#12pmtext").css({"background-color":"mediumseagreen" , "color":"white"});
    // } else if(moment().isAfter(moment(today + " 12:00"))){
    //     $("#12pmtext").css({"background-color":"tomato" , "color":"white"})
    // } 

    // if (moment().isBefore(moment(today + " 13:00"))){
    //     $("#1pmtext").css({"background-color":"mediumseagreen" , "color":"white"});
    // } else if(moment().isAfter(moment(today + " 13:00"))){
    //     $("#1pmtext").css({"background-color":"tomato" , "color":"white"})
    // } 

    // if (moment().isBefore(moment(today + " 14:00"))){
    //     $("#2pmtext").css({"background-color":"mediumseagreen" , "color":"white"});
    // } else if(moment().isAfter(moment(today + " 14:00"))){
    //     $("#2pmtext").css({"background-color":"tomato" , "color":"white"})
    // } 

    // if (moment().isBefore(moment(today + " 15:00"))){
    //     $("#3pmtext").css({"background-color":"mediumseagreen" , "color":"white"});
    // } else if(moment().isAfter(moment(today + " 15:00"))){
    //     $("#3pmtext").css({"background-color":"tomato" , "color":"white"})
    // } 

    // if (moment().isBefore(moment(today + " 16:00"))){
    //     $("#4pmtext").css({"background-color":"mediumseagreen" , "color":"white"});
    // } else if(moment().isAfter(moment(today + " 16:00"))){
    //     $("#4pmtext").css({"background-color":"tomato" , "color":"white"})
    // } 

    // if (moment().isBefore(moment(today + " 17:00"))){
    //     $("#5pmtext").css({"background-color":"mediumseagreen" , "color":"white"});
    // } else if(moment().isAfter(moment(today + " 17:00"))){
    //     $("#5pmtext").css({"background-color":"tomato" , "color":"white"})
    // } 




    




















})


