// const { default: axios } = require("axios");

// const axios = require('axios');
let url = 'https://swapi.dev/api/people/';
let jokes = [];
let next = "h"
let x = url;
console.log(axios.get(url));
for (let i = 0; i < 10; i++) {
  
  //dont work right,does the get 10 times then does the rest
axios.get(x)
  .then(function (response) {
    // handle success
    // console.log(response);
    // console.log('JOKES', response.data);
    jokes = response.data;
    next = jokes.next;
    console.log("HERE", jokes);
    createListItems(jokes.results);
    x = next;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}
 





function createListItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        let listItem = document.createElement('li');
        listItem.innerText = `${jokes.results[i].name}`;
        document.getElementById('myList').appendChild(listItem);
    }
}
  

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