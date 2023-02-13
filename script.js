let myPromise = new Promise((resolve, reject) => {
    const randomInt = Date.now();
    if (randomInt % 2 === 0) {
        resolve("it was even");
    }
    else {
        reject("it was odd")
    }
   
})

// consuming the result of the promise
myPromise.then((success) => {
    console.log(`yay ${success}`);
})
.catch((error) => {
    console.log(`oh no ${error}`)
})