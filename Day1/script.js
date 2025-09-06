//var((ES5)  let const(ES6) 
//declaration and intialization

var a = 12;
// window mein add hota hai
//aap firse declare kr skte ho same name se and error nahi aayge

var a = 13

// let use karna se same name variable se bachta hai and also help to stop the copy of the same variable

//Scope(global,block,functional)
//global scope
var name =  deewakar;
//function scope
function  abcd(){
    var a = 12;

}
//block scope
{
    var b = 12;
}
//reassignment/redeclaration
var a = 12;
a = 16;
//we can on;ly declara with the var not with let

//temporal Dead Zone
//tdz - utna area jitna mein js ko pata to hai ki variable exits to
//  karta hai par wo aapko value nahi de skata
console.log(a);
// we can assess the element before the declaration of the element its show the error
let name = 12;

//Hoisting impact per type
var number = undefined
//hoisting -> ek variable ko jab js main banaate hai to wo variable do hisso main toot
//jaata hai and uska declare part upar chala jaata hai and uska initialization part 
// neeche re jata hai

var number = 12;

a  = 12;

// with the use of let we can access the variable before the initalization

/**
 * var -> hoist -> undefined
 * let -> hoist -> no value set(refernce error)
 * const -> hosit -> no value(refernce error)
 */

/*
Q} var x =1 ;
    {
    var x = 2;

    }
    console.log(x);
    note :- var does not respect the braces its only respect function

Ans:- x = 2

*/

/*
Q}

let a = 10; //block scope // global scope
    {
    let a = 20;
    console.log("inside:",a);
    }
    console.log("outside:",a);
    note:-

Ans:-inside = 10;
    outside = 20;

*/
/*
if (true)
{
    var a =1;
    let b = 2;

}
console.log(a);//1

console.log(b);//RefernceError
 */

/*
note:- in const you cant reassigin the value with = to but you can update the value
const person = {name: "harsh"};
person.name = "sharma"; // Allowed
person = {};  // not allowed
*/

