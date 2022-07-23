//name global variables
    // moment.JS to add the Date to the top of the Scheduler
let today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
let saver = document.querySelector(".input-text");
let btn = document.querySelectorAll(".saveBtn");
// let container = document.querySelector(".container");

// let saveBtn = document.getElementById("save-text");
// saveBtn.addEventListener("click", test)
// function test(event) {
//     console.log(event.target.previousElementSibling.children[1].value);
//     console.log("hi");
// }

let container=document.querySelector(".container")
container.addEventListener("click", test)
function test(event) {
    if (event.target.matches("button")){
        console.log("1", this);
    console.log("2", event);
    console.log("3", event.target);
    console.log("4", btn)
    console.log(event.target.previousElementSibling.children[1].value);
    console.log("hi");
    }
    
}

//write functions
    //on click of EACH save button SET items to local storage 
// saver.addEventListener("click", function(event){
//     console.log("hello");
//     console.log(event.path[1].children[0].outerText);
//     console.log(event.target.previousElementSibling.value);
// });
    //on open page GET items from local storage and show on schedule 


//call functions that are needed to be called globally