"use strict";

const fdTable = document.getElementById('fTable');
const tableHead = document.getElementById('hdrTable');
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

table();

function table() {
  let headerID = document.createElement("th");
  headerID.textContent = "ID";

  let headerName = document.createElement("th");
  headerName.textContent = "Food Name";

  let headerType = document.createElement("th");
  headerType.textContent = "Type of Food";

  let headerPrice = document.createElement("th");
  headerPrice.textContent = "price";

  hdrTable.appendChild(headerID);
  hdrTable.appendChild(headerName);
  hdrTable.appendChild(headerType);
  hdrTable.appendChild(headerPrice);
}

food.prototype.Render = function () {
  let row = document.createElement("tr");
  let id = document.createElement("td");
  let name = document.createElement("td");
  let type = document.createElement("td");
  let price = document.createElement("td");

  id.textContent = this.id;
  name.textContent = this.foodName;
  type.textContent = this.foodType;
  price.textContent = this.price;

  row.appendChild(id);
  row.appendChild(name);
  row.appendChild(type);
  row.appendChild(price);

  fTable.appendChild(row);

};
getData();

function getData(){
  let retrivedData = localStorage.getItem("Food");
  let parsedData = JSON.parse(retrivedData);
  if(parsedData!=null){
  for (let i = 0; i < parsedData.length; i++) {
    let newFoodOP = new food(
      parsedData[i].foodName,
      parsedData[i].foodType,
      parsedData[i].price
    );
    newFoodOP.fID();

  }
}
  
for (let i = 0; i < allFood.length; i++) {
  allFood[i].Render();
}
    console.log(allFood);
}