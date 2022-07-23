//name global variables
// moment.JS to add the Date to the top of the Scheduler
let today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
let currentTime = moment()
$("#timeNow").text(currentTime.format("HH[00]"));
let saver = document.querySelector(".input-text");
let btn = document.querySelectorAll(".saveBtn");
let container = document.querySelector(".container");
let input = document.querySelector(".text-area");
let timeStamp =document.querySelectorAll(".time-stamp");


moment().add(7, 'days').subtract(1, 'months').year(2009).hours(0).minutes(0).seconds(0);
// let saveBtn = document.getElementById("save-text");
// saveBtn.addEventListener("click", test)
// function test(event) {
//     console.log(event.target.previousElementSibling.children[1].value);
//     console.log("hi");
// }

//write functions
    //on click of EACH save button SET items to local storage

function test(event) {
    // console.log("1", event.target.previousElementSibling.textContent.trim())
    // console.log("2", event.target.previousElementSibling.value.trim())
    if (event.target.matches("button")) {
        if (event.target.previousElementSibling.textContent.trim() === "0800") {
            localStorage.setItem("0800",event.target.previousElementSibling.children[1].value);
        } else if (event.target.previousElementSibling.textContent.trim() === "0900") {
            localStorage.setItem("0900",event.target.previousElementSibling.children[1].value);
        } else if (event.target.previousElementSibling.textContent.trim() === "1000") 
        {localStorage.setItem("1000",event.target.previousElementSibling.children[1].value);
        } else if (event.target.previousElementSibling.textContent.trim() === "1100")
         {localStorage.setItem("1100",event.target.previousElementSibling.children[1].value);
        } else if (event.target.previousElementSibling.textContent.trim() === "1200")
         {
            localStorage.setItem("1200",event.target.previousElementSibling.children[1].value);
        } else if (
            event.target.previousElementSibling.textContent.trim() === "1300"
        ) {
            localStorage.setItem(
                "1300",event.target.previousElementSibling.children[1].value);
        } else if (
            event.target.previousElementSibling.textContent.trim() === "1400"
        ) {
            localStorage.setItem(
                "1400",event.target.previousElementSibling.children[1].value);
        } else if (
            event.target.previousElementSibling.textContent.trim() === "1500"
        ) {
            localStorage.setItem(
                "1500",event.target.previousElementSibling.children[1].value);
        } else {
            localStorage.setItem(
                "1600",event.target.previousElementSibling.children[1].value);
        }
    }
};
    //on open page GET items from local storage and show on schedule
let pasteData = function(){
    document.getElementById("0800").value = window.localStorage.getItem("0800");
    document.getElementById("0900").value = window.localStorage.getItem("0900");
    document.getElementById("1000").value = window.localStorage.getItem("1000");
    document.getElementById("1100").value = window.localStorage.getItem("1100");
    document.getElementById("1200").value = window.localStorage.getItem("1200");
    document.getElementById("1300").value = window.localStorage.getItem("1300");
    document.getElementById("1400").value = window.localStorage.getItem("1400");
    document.getElementById("1500").value = window.localStorage.getItem("1500");
    document.getElementById("1600").value = window.localStorage.getItem("1600");
    // let newInput = document.createElement("input");
    // newInput.textContent= storageSchedule;
};
    //write color coding functions
let colorCode = function(){
    console.log(timeStamp);
    for (let i = 0; i < timeStamp.length; i++) {
        if(timeStamp[i].textContent < currentTime){
           timeStamp[i].parentElement.nextElementSibling.classList.add("past");
        }else if(timeStamp[i].textContent === currentTime){
            timeStamp[i].parentElement.nextElementSibling.classList.add("present");
        }else{
            timeStamp[i].parentElement.nextElementSibling.classList.add("future");
        } 
    }    
};


//call functions that are needed to be called globally

// event listeners/execution code
container.addEventListener("click", test);
pasteData();
colorCode();