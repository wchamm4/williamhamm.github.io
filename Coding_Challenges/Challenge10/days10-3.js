"use strict"

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Coding Challenge 3

   Debug
   Author: William Hamm
   Date:   11/17/2024


*/

let thisDay = new Date();
let wDay = thisDay.getDay();
let imgSrc = "";

// Switch/case to determine the image source based on the day of the week
switch (wDay) {
   case 0:
      imgSrc = "sunday.png";
      break;
   case 1:
      imgSrc = "monday.png";
      break;
   case 2:
      imgSrc = "tuesday.png";
      break;
   case 3:
      imgSrc = "wednesday.png";
      break;
   case 4:
      imgSrc = "thursday.png";
      break;
   case 5:
      imgSrc = "friday.png";
      break;
   case 6:
      imgSrc = "saturday.png";
      break;
}

// Create the HTML code for the banner
let htmlCode = `<img src='${imgSrc}' alt='' />`;

// Set the inner HTML of the element with ID "banner"
document.getElementById("banner").innerHTML = htmlCode;