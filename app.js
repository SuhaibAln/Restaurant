 'use strict';
var allFood = [];
const foodTable = document.getElementById("fTable");
const tableHead = document.getElementById("hdrTable");

function food(foodName, foodType, price) {
  this.foodName = foodName;
  this.foodType = foodType;
  this.price = price;
  allFood.push(this);
}
food.prototype.fID = function() {
  this.id = Math.floor(1111 + Math.random() * 9999);
}


food.prototype.table=function(){
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

}


const formEl=document.getElementById("formID");
formEl.addEventListener("submit",handleSubmit);

function handleSubmit(event){
event.preventDefault();

let foodName= event.target.foodName.value;
let foodType = event.target.foodType.value;
let price = event.target.foodPrice.value;

const newFood = new food(foodName, foodType, price);
newFood.table();
newFood.fID();
newFood.Render();

}



food.prototype.Render = function() {
  let row = document.createElement("tr");
  let id = document.createElement("td");
  let name = document.createElement("td");
  let type = document.createElement("td");
  let price = document.createElement("td");
  
  id.textContent  = this.id;
  name.textContent  = this.foodName;
  type.textContent  = this.foodType;
  price.textContent  = this.price;
  
  row.appendChild(id);
  row.appendChild(name);
  row.appendChild(type);
  row.appendChild(price);
  

  foodTable.appendChild(row);
}

