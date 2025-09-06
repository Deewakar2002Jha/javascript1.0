//repeat karna ko loops kahte hai
// for while do-while foreach


//kaha se jaana hai -> kaha tak jaana hai -> kaise jana hai
//for

//1-50
//kaha se jaana hai -> kab rukna hai -> kaose jaana hai
//while


//1-40 for
//20-50 for
//hello na aajaye - while
//laal color ka ped -while
//bhaalu miley jab upar hired baitha hai - while


//for loops
/*
for (start; end; change;){

}
*/
for(let i = 1; i<101; i++){
    console.log(i);
}
/*
start
while(end){
    //code
    change
}
*/
let i = 1;
while(i < 32){
    //code
    console.log(i);
    i++;
}

//break 
for (let i = 1; i <101; i++){
        console.log(i);
        if(i === 32){
            break;
        }
}

//continue
for(let i = 1;i<100; i++){
    if(i === 32){
        continue;
    }
    console.log(i);
}

