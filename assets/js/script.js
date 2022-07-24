//name global variables
// moment.JS to add the Date to the top of the Scheduler
let today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
let currentTime = moment();
$("#timeNow").text(currentTime.format("HH[00]"));
let saver = document.querySelector(".input-text");
let btn = document.querySelectorAll(".saveBtn");
let container = document.querySelector(".container");
let input = document.querySelector(".text-area");
let timeStamp = document.querySelectorAll(".time-stamp");
let timeNow = document.getElementById("timeNow");
let addedAlert = document.querySelector(".added");
//write functions
//on click of EACH save button SET items to local storage

function test(event) {
  if (event.target.matches("button")) {
    if (event.target.previousElementSibling.textContent.trim() === "0800") {
      localStorage.setItem(
        "0800",
        event.target.previousElementSibling.children[1].value
      );
    } else if (
      event.target.previousElementSibling.textContent.trim() === "0900"
    ) {
      localStorage.setItem(
        "0900",
        event.target.previousElementSibling.children[1].value
      );
    } else if (
      event.target.previousElementSibling.textContent.trim() === "1000"
    ) {
      localStorage.setItem(
        "1000",
        event.target.previousElementSibling.children[1].value
      );
    } else if (
      event.target.previousElementSibling.textContent.trim() === "1100"
    ) {
      localStorage.setItem(
        "1100",
        event.target.previousElementSibling.children[1].value
      );
    } else if (
      event.target.previousElementSibling.textContent.trim() === "1200"
    ) {
      localStorage.setItem(
        "1200",
        event.target.previousElementSibling.children[1].value
      );
    } else if (
      event.target.previousElementSibling.textContent.trim() === "1300"
    ) {
      localStorage.setItem(
        "1300",
        event.target.previousElementSibling.children[1].value
      );
    } else if (
      event.target.previousElementSibling.textContent.trim() === "1400"
    ) {
      localStorage.setItem(
        "1400",
        event.target.previousElementSibling.children[1].value
      );
    } else if (
      event.target.previousElementSibling.textContent.trim() === "1500"
    ) {
      localStorage.setItem(
        "1500",
        event.target.previousElementSibling.children[1].value
      );
    } else {
      localStorage.setItem(
        "1600",
        event.target.previousElementSibling.children[1].value
      );
    } 
   addedAlert.textContent= "🥰 Appointment added to local storage 🥰";
  }
}
//on open page GET items from local storage and show on schedule
let pasteData = function () {
  document.getElementById("0800").value = window.localStorage.getItem("0800");
  document.getElementById("0900").value = window.localStorage.getItem("0900");
  document.getElementById("1000").value = window.localStorage.getItem("1000");
  document.getElementById("1100").value = window.localStorage.getItem("1100");
  document.getElementById("1200").value = window.localStorage.getItem("1200");
  document.getElementById("1300").value = window.localStorage.getItem("1300");
  document.getElementById("1400").value = window.localStorage.getItem("1400");
  document.getElementById("1500").value = window.localStorage.getItem("1500");
  document.getElementById("1600").value = window.localStorage.getItem("1600");
};
//write color coding functions
let colorCode = function () {
  console.log(timeStamp[0]);
  for (let i = 0; i < timeStamp.length; i++) {
    if (timeStamp[i].textContent === timeNow.textContent) {
      timeStamp[i].parentElement.nextElementSibling.classList.add("present");
    } else if (timeStamp[i].textContent < timeNow.textContent) {
      timeStamp[i].parentElement.nextElementSibling.classList.add("past");
    } else {
      timeStamp[i].parentElement.nextElementSibling.classList.add("future");
    }
  }
};

// event listeners/execution code
container.addEventListener("click", test);
pasteData();
colorCode();
