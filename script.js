// const { default: axios } = require("axios");
// const axios = require('axios');
//VARIABLES      
// const API_KEY = "8e6a500225204564abc95ea1a6d3a438";
let img = document.querySelector("img");
const BASE_URL = "https://randomuser.me";
let btn = document.querySelector("button");
const radioButtons = document.querySelectorAll('input[name="gender"]');
let h1 = document.querySelector("h1");
let genderPref;
let nation;
let nameboo = document.getElementById("name");
let city = document.getElementById("city");
let age = document.getElementById("age");
let nationTest = document.getElementById("nation")


btn.addEventListener( "click", ()=> {
	for (let x of radioButtons) {
	  if (x.checked) {
        genderPref = x.value;
       break;
    } 
  }
  
   apiCall(); 
})


function apiCall() {
  let options = {
    baseURL: BASE_URL,
    params: {
      gender: genderPref,
      nat: nationTest.value,
    }
  }
  //axios.get('/user?ID=12345') same as below but not able to be modified
  axios.get('/api/', options)
    .then(function (response) {
      console.log(response);
      state.user = response.data.results[0];
      makePage();
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    // always executed
    });
}

let state = {
   user: null,
}

function makePage() {
img.src = state.user.picture.large
nameboo.innerHTML = state.user.name.first + " " + state.user.name.last;
city.innerHTML = state.user.location.city + " " + state.user.location.postcode;
age.innerHTML = state.user.dob.age;
}







// let url = 'https://swapi.dev/api/people/';
// let jokes = [];
// let next = "h"
// let x = url;
// console.log(axios.get(url));
// for (let i = 0; i < 10; i++) {
  
//   //don't work right,does the get 10 times then does the rest
// axios.get(x)
//   .then(function (response) {
//     // handle success
//     // console.log(response);
//     // console.log('JOKES', response.data);
//     jokes = response.data;
//     next = jokes.next;
//     console.log("HERE", jokes);
//     createListItems(jokes.results);
//     x = next;
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
// }
 


// function createListItems(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let listItem = document.createElement('li');
//         listItem.innerText = `${jokes.results[i].name}`;
//         document.getElementById('myList').appendChild(listItem);
//     }
// }
  

// let myPromise = new Promise((resolve, reject) => {
//     const randomInt = Date.now();
//     if (randomInt % 2 === 0) {
//         resolve("it was even");
//     }
//     else {
//         reject("it was odd")
//     }
   
// })

// // consuming the result of the promise
// myPromise.then((success) => {
//     console.log(`yay ${success}`);
// })
// .catch((error) => {
//     console.log(`oh no ${error}`)
// })