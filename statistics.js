"use strict";

const fdTable = document.getElementById("fTable");
const tableHead = document.getElementById("hdrTable");
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

function getData() {
  let retrivedData = localStorage.getItem("Food");
  let parsedData = JSON.parse(retrivedData);
  if (parsedData != null) {
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

//Task 13 Chart

const names = [];
const prices = [];
const typeNames = [];



// var numBoys = allFood.reduce(function (n, person) {
//   return n + (allFood.foodType != 'null');
// }, 0);

// console.log(numBoys);


// function was from : https://www.tutorialspoint.com/how-to-count-number-of-occurrences-of-repeated-names-in-an-array-javascript

var Count = Object.values(
  allFood.reduce((obj, { foodType }) => {
    if (obj[foodType] === undefined)
      obj[foodType] = { foodType: foodType, occurrences: 1 };
    else obj[foodType].occurrences++;

    return obj;
  }, {})
);
console.log(Count);
var Arr= [];
for(let i = 0; i < Count.length; i++){
Arr.push(Count[i].occurrences);
console.log(Arr);

}

for (let i = 0; i < allFood.length; i++) {
  typeNames.push(allFood[i].foodType);
}
for (let i = 0; i < allFood.length; i++) {
  names.push(allFood[i].foodName);
  prices.push(allFood[i].price);
}
const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: names,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: prices,
    },
  ],
};

const pieData = {
  labels: typeNames,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: [
        "#50B432",
        "#ED561B",
        "#DDDF00",
        "#24CBE5",
        "#64E572",
        "#FF9655",
      ],
      borderColor: "rgb(255, 99, 132)",
      data: Arr,
    },
  ],
};

const configBar = {
  type: "bar",
  data: data,
  options: {},
};

const configPie = {
  type: "pie",
  data: pieData,
  options: {},
};

const barChart = new Chart(document.getElementById("barChart"), configBar);

const pieChart = new Chart(document.getElementById("pieChart"), configPie);
