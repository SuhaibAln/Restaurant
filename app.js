"use strict";
var allFood = [];
function food(foodName, foodType, price) {
  this.foodName = foodName;
  this.foodType = foodType;
  this.price = price;
  allFood.push(this);
}
food.prototype.fID = function () {
  this.id = Math.floor(1111 + Math.random() * 9999);
};

const formEl = document.getElementById("formID");
formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  let foodName = event.target.foodName.value;
  let foodType = event.target.foodType.value;
  let price = event.target.foodPrice.value;

  const newFood = new food(foodName, foodType, price);

  newFood.fID();

  saveData();
}

function saveData() {
  let stringifiedData = JSON.stringify(allFood);
  localStorage.setItem("Food", stringifiedData);
}
