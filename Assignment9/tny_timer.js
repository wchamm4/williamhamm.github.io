
"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: William Hamm
   Date:   11/10/2024

*/

// Initial call to display the countdown immediately
showClock();

// Run the showClock() function every second to update the countdown
setInterval(showClock, 1000);

function showClock() {
   // Create a Date object for the current date and time
   let thisDay = new Date();

   // Get local date and time strings
   let localDate = thisDay.toLocaleDateString();
   let localTime = thisDay.toLocaleTimeString();

   // Display current local date and time
   document.getElementById("currentTime").innerHTML = `<span>${localDate}</span><span>${localTime}</span>`;

   // Get the next 4th of July date and set it to 9 p.m.
   let j4Date = nextJuly4(thisDay);
   j4Date.setHours(21, 0, 0, 0);

   // Calculate time difference between now and the next 4th of July at 9 p.m.
   let timeDiff = j4Date - thisDay;
   let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
   let hrs = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   let mins = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
   let secs = Math.floor((timeDiff % (1000 * 60)) / 1000);

   // Update countdown elements with time left
   document.getElementById("dLeft").textContent = days;
   document.getElementById("hLeft").textContent = hrs;
   document.getElementById("mLeft").textContent = mins;
   document.getElementById("sLeft").textContent = secs;
}

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2025");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}