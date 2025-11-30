"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Review Assignment

   Author: William Hamm
   Date:   11/17/2024
*/

// Step 1: Declare the testing date
let thisDay = new Date("October 1, 2021");

// Step 2: Create the tableHTML variable with initial table structure
let tableHTML = `
<table id="eventTable">
  <caption>
    Upcoming Events
  </caption>
  <tr>
    <th>Date</th>
    <th>Event</th>
    <th>Price</th>
  </tr>
`;

// Step 3: Calculate the end date for the two-week period
let endDate = new Date(thisDay.getTime() + 14 * 24 * 60 * 60 * 1000);

// Step 4: Loop through the events and filter those within the two-week window
for (let i = 0; i < eventDates.length; i++) {
  // Declare eventDate variable
  let eventDate = new Date(eventDates[i]);

  // Extract eventDay and eventTime
  let eventDay = eventDate.toDateString();
  let eventTime = eventDate.toLocaleTimeString();

  // Check if the event is within the two-week window
  if (thisDay <= eventDate && eventDate <= endDate) {
    // Add the event to the tableHTML
    tableHTML += `
    <tr>
      <td>${eventDay} @ ${eventTime}</td>
      <td>${eventDescriptions[i]}</td>
      <td>${eventPrices[i]}</td>
    </tr>
    `;
  }
}

// Step 5: Close the table HTML structure
tableHTML += `</table>`;

// Step 6: Insert the table into the HTML document
document.getElementById("eventList").innerHTML = tableHTML;