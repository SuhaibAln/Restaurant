
"use strict";

const fdTable = document.getElementById('fTable');
const tableHead = document.getElementById('hdrTable');
var AllFood = [];

function Food(foodName, foodType, price) {
  this.foodName = foodName;
  this.foodType = foodType;
  this.price = price;
  AllFood.push(this);
}
Food.prototype.fID = function () {
  this.id = Math.floor(1111 + Math.random() * 9999);
};




  let headerID = document.createElement("th");
  headerID.textContent = "ID";

  let headerName = document.createElement("th");
  headerName.textContent = "Food Name";

  let headerType = document.createElement("th");
  headerType.textContent = "Type of Food";

  let headerPrice = document.createElement("th");
  headerPrice.textContent = "price";

  tableHead.appendChild(headerID);
  tableHead.appendChild(headerName);
  tableHead.appendChild(headerType);
  tableHead.appendChild(headerPrice);


Food.prototype.Render = function () {
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

  fdTable.appendChild(row);
};

getData();

function getData() {
  let retrivedData = localStorage.getItem("stringifiedData");
  let parsedData = JSON.parse(retrivedData);
  if(parsedData!=null){
  for (let i = 0; i < parsedData.length; i++) {
    let newFood = new Food.food(
      parsedData[i].foodName,
      parsedData[i].foodType,
      parsedData[i].price
    );
  }
  }
  for (let i = 0; i < AllFood.length; i++) {
    AllFood[i].Render();
  }
}