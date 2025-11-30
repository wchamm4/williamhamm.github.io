"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Author: William Hamm
   Date:   11/17/2024
   
   Filename: tc_cart.js
*/

// Step 1: Initialize the total order amount
let orderTotal = 0;

// Step 2: Start the HTML for the shopping cart table
let cartHTML = `
<table>
  <tr>
    <th>Item</th>
    <th>Description</th>
    <th>Price</th>
    <th>Qty</th>
    <th>Total</th>
  </tr>
`;

// Step 3: Loop through the items and generate rows for the shopping cart table
for (let i = 0; i < item.length; i++) {
  // Calculate the total cost for the current item
  let itemCost = itemPrice[i] * itemQty[i];

  // Add a row for the current item to the cartHTML
  cartHTML += `
  <tr>
    <td><img src='tc_item.png' alt='${item[i]}' /></td>
    <td>${itemDescription[i]}</td>
    <td>${itemPrice[i].toFixed(2)}</td>
    <td>${itemQty[i]}</td>
    <td>${itemCost.toFixed(2)}</td>
  </tr>
  `;

  // Add the item cost to the order total
  orderTotal += itemCost;
}

// Step 4: Add the subtotal row to the shopping cart table
cartHTML += `
<tr>
  <td colspan="4">Subtotal</td>
  <td>$${orderTotal.toFixed(2)}</td>
</tr>
</table>
`;

// Step 5: Insert the shopping cart table into the HTML document
document.getElementById("cart").innerHTML = cartHTML;