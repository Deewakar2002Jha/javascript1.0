//type correction (== vs ===)
//Truthy vs false value

//type correction => concepts jismein aapka ek type automatically convert hojaayga

/*
"dewakar" + "jha" = deewakar jha
"5" + 1 = 51 in javascript + operator is use for concatenation and addition also

"5" - 1 = 4 in javascript - operator is only use for subtraction so
*/

// 0 false "" null undefined NaN document.all are false in javascript
// all other -> true in javascript

/*
typeof null -> 'object'
typeof [] -> 'object'
typeof {} -> 'object'
typeof function(){} -> 'function'
typeof NaN -> 'number'
*/

/*
let x = 10;
let y = 20;

if(x > 5 && y < 25){
    console.log("A");
}
else {
    console.log("B");
}

ans= A
*/
/*
let isAdmin = true;
let isLoggedIn = false;

if(isAdmin || isLoggedIn){
    console.log("Access granted");
}
else{
    console.log("Access Denied")
}

ans = Access granted
*/

/*
let temp = 35;

if(!(temp <30)){
    console.log("Hot");

}else{
    console.log("Pleasant");
}

ans = Hot
*/
/*
let a = 0;
if(a){
    console.log("Truthy");
}
else{
    console.log("Falsy")
}

ans = falsy 

note:- becase 0 has falsy nature so if condition is false so else condition will return
*/
/*
let score = 78;

let grade  = score >= 90 ? "A" : score >= 75 ? "B" : score >= 
60 ? "C" : "Fail";

console.log(grade);

ans = B
*/
