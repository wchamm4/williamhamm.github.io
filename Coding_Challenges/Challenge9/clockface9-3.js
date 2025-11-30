"use strict"

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Coding Challenge 3

   Clock Face
   Author: William Hamm
   Date:   11/10/2024


*/

function moveHands() {
   let nowTime = new Date();
   let nowSeconds = nowTime.getSeconds();
   let nowMinutes = nowTime.getMinutes();
   let nowHours = nowTime.getHours();

   let secondsAngle = nowSeconds * 6;
   let minutesAngle = (nowMinutes + nowSeconds / 60) * 6;
   let hoursAngle = (nowHours + nowSeconds / 3600 + nowMinutes / 60) * 30;

   rotateHand(secondsAngle, "seconds");
   rotateHand(minutesAngle, "minutes");
   rotateHand(hoursAngle, "hours");
}

moveHands();
setInterval(moveHands, 1000);

/* ------------------------------------------------

   The rotateHand() using the transform style to rotate the hand
   image by a specified angle
*/

function rotateHand(angle, hand) {
   document.getElementById(hand).style.transform = "rotate(" + angle + "deg)";
}
