
 
// let dateTime = "";
//     date = ""; 


// let update = function () {
//     date = moment(new Date())
//     dateTime.text(date.format("MM-DD-YYYY , hh:mm:ss a")); 
     
// }

$(document).ready(function() {

let today = moment().format("MM-DD-YYYY")
$("#currentDay").text("Today's date: " + today);
    // dateTime = $("#currentDay");
    // update();
    // setInterval(update, 1000);

    
    // console.log(moment().format("HH"));

    // console.log(moment(new Date()));
    
$(".saveBtn").on("click", function(event) {
    console.log(event.target.id);
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

//functions to save text from textarea in local storage
    // $("#9amBtn").on("click", function(){
    //     let saved_text = $("#9amtext").val();
    //     console.log(saved_text);
    //     JSON.stringify(localStorage.setItem("9amsaved_text", saved_text));
    // });
    // $("#10amBtn").on("click", function(){
    //     console.log(event);
    //     let saved_text = $("#10amtext").val();
    //     console.log(saved_text);
    //     JSON.stringify(localStorage.setItem("10amsaved_text", saved_text));
    // });
    // $("#11amBtn").on("click", function(){
    //     let saved_text = $("#11amtext").val();
    //     console.log(saved_text);
    //     JSON.stringify(localStorage.setItem("11amsaved_text", saved_text));
    // });
    // $("#12pmBtn").on("click", function(){
    //     let saved_text = $("#12pmtext").val();
    //     console.log(saved_text);
    //     JSON.stringify(localStorage.setItem("12pmsaved_text", saved_text));
    // });
    // $("#1pmBtn").on("click", function(){
    //     let saved_text = $("#1pmtext").val();
    //     console.log(saved_text);
    //     JSON.stringify(localStorage.setItem("1pmsaved_text", saved_text));
    // });
    // $("#2pmBtn").on("click", function(){
    //     let saved_text = $("#2pmtext").val();
    //     console.log(saved_text);
    //     JSON.stringify(localStorage.setItem("2pmsaved_text", saved_text));
    // });
    // $("#3pmBtn").on("click", function(){
    //     let saved_text = $("#3pmtext").val();
    //     console.log(saved_text);
    //     JSON.stringify(localStorage.setItem("3pmsaved_text", saved_text));
    // });
    // $("#4pmBtn").on("click", function(){
    //     let saved_text = $("#4pmtext").val();
    //     console.log(saved_text);
    //     JSON.stringify(localStorage.setItem("4pmsaved_text", saved_text));
    // });
    // $("#5pmBtn").on("click", function(){
    //     let saved_text = $("#5pmtext").val();
    //     console.log(saved_text);
    //     JSON.stringify(localStorage.setItem("5pmsaved_text", saved_text));
    // });


    // if(moment().hour().isBefore($())
        

    if (moment().isBefore(moment(today + " 09:00"))){
        $("#9amtext").css({"background-color":"mediumseagreen" , "color":"white"});
    } else if(moment().isAfter(moment(today + " 09:00"))){
        $("#9amtext").css({"background-color":"tomato" , "color":"white"})
    } else if(moment().hour().isSame("9")){
        $("#9amtext").css({"background-color":"cornflowerblue" , "color":"white"})
    };

    if (moment().hour() < 10){
        $("#10amtext").css({"background-color":"mediumseagreen" , "color":"white"});
    } else if(moment().hour() > 10){
        $("#10amtext").css({"background-color":"tomato" , "color":"white"})
    } else if(moment().hour() == 10){
        $("#10amtext").css({"background-color":"cornflowerblue" , "color":"white"})
    };

    if (moment().isBefore(moment(today + " 11:00"))){
        $("#11amtext").css({"background-color":"mediumseagreen" , "color":"white"});
    } else if(moment().isAfter(moment(today + " 11:00"))){
        $("#11amtext").css({"background-color":"tomato" , "color":"white"})
    } 

    if (moment().isBefore(moment(today + " 12:00"))){
        $("#12pmtext").css({"background-color":"mediumseagreen" , "color":"white"});
    } else if(moment().isAfter(moment(today + " 12:00"))){
        $("#12pmtext").css({"background-color":"tomato" , "color":"white"})
    } 

    if (moment().isBefore(moment(today + " 13:00"))){
        $("#1pmtext").css({"background-color":"mediumseagreen" , "color":"white"});
    } else if(moment().isAfter(moment(today + " 13:00"))){
        $("#1pmtext").css({"background-color":"tomato" , "color":"white"})
    } 

    if (moment().isBefore(moment(today + " 14:00"))){
        $("#2pmtext").css({"background-color":"mediumseagreen" , "color":"white"});
    } else if(moment().isAfter(moment(today + " 14:00"))){
        $("#2pmtext").css({"background-color":"tomato" , "color":"white"})
    } 

    if (moment().isBefore(moment(today + " 15:00"))){
        $("#3pmtext").css({"background-color":"mediumseagreen" , "color":"white"});
    } else if(moment().isAfter(moment(today + " 15:00"))){
        $("#3pmtext").css({"background-color":"tomato" , "color":"white"})
    } 

    if (moment().isBefore(moment(today + " 16:00"))){
        $("#4pmtext").css({"background-color":"mediumseagreen" , "color":"white"});
    } else if(moment().isAfter(moment(today + " 16:00"))){
        $("#4pmtext").css({"background-color":"tomato" , "color":"white"})
    } 

    if (moment().isBefore(moment(today + " 17:00"))){
        $("#5pmtext").css({"background-color":"mediumseagreen" , "color":"white"});
    } else if(moment().isAfter(moment(today + " 17:00"))){
        $("#5pmtext").css({"background-color":"tomato" , "color":"white"})
    } 




    




















})


