//settimeout boilcode
/*

setTimeout(function(){
    console.log("hey daddy");
},1000)

*/

//SetInterval boilcode
/*

setinterval(function(){
    console.log("hey mother");
},1000)

*/

//how to clearsetTimeout

/*

let time = settimeout(function(){
    console.log("hi sister")
},1000)

clearsetTimeout(time);

*/

// how to clearsetInterval

/*

let time = setInterval(function(){
    console.log("hi sister")
},1000)

clearInterval(time);

*/

// how to create and countdown to the 10;

/*
let count = 10;

let interval = setInterval(function(){
    if(count >= 1){
    count --;
    console.log(count);
    }
    else{
        clearInterval(interval)
    }
},1000)
*/
let progress = 0;
const progressFill = document.getElementById("progress");
const progressText = document.getElementById("progress-text");

// simulate download
const interval = setInterval(() => {
  if (progress < 100) {
    progress += 2; // increase by 2
    progressFill.style.width = progress + "%";
    progressText.textContent = progress + "%";
  } else {
    clearInterval(interval);
    progressText.textContent = "Complete!";
  }
}, 200);