"use strict";

// Get the input fields and buttons
const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const input3 = document.getElementById('input-3');
const addBtn = document.getElementById('addBtn');
const subBtn = document.getElementById('subBtn');
const muliBtn = document.getElementById('muliBtn');
const diBtn = document.getElementById('diBtn');

// Add click event listeners to the buttons
function init() {
  addBtn.onclick = onAddBtnClicked;
  subBtn.onclick = onSubBtnClicked;
  muliBtn.onclick = onMuliBtnClicked;
  diBtn.onclick = onDiBtnClicked;
}

// Event handler for the add button
function onAddBtnClicked() {
  const num1 = Number(input1.value);
  const num2 = Number(input2.value);
  const result = num1 + num2;
  input3.value = result;
}

// Event handler for the subtract button
function onSubBtnClicked() {
  const num1 = Number(input1.value);
  const num2 = Number(input2.value);
  const result = num1 - num2;
  input3.value = result;
}

// Event handler for the multiply button
function onMuliBtnClicked() {
  const num1 = Number(input1.value);
  const num2 = Number(input2.value);
  const result = num1 * num2;
  input3.value = result;
}

// Event handler for the divide button
function onDiBtnClicked() {
  const num1 = Number(input1.value);
  const num2 = Number(input2.value);
  const result = num1 / num2;
  input3.value = result;
}

// Call the init function when the page loads
window.onload = init;
