// if statement
// === triple equal checks datatype alse
// if(2==="2"){
//     console.log("executed");
// }

// also known as strict checking qki ehah datatypr v dekhna prega
// agr data type same hua tab he true hoga not qeual edh !== 2 equal ayega

// const score=200
// if(score>100){
//     const power="fly";
//     console.log(`user power:${power}`);
// }
//  console.log(`user power:${power}`); //error ayega eaga simce power abhi scope k bahar h


//nested loops used in real life online shopping

const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false

if(userLoggedIn && debitCard && loggedInFromGoogle ){
    console.log("Allow to buy course")
}

const userEmail=[] //empty array m run horha h but emprt string m nhi 
if(userEmail){//due to truthr aur falsy vallues
    console.log("Got user email")
}
else{
    console.log("Don't have user email")
}

// truthy and falsy values
// falsy values
//  false,0,-0,BigInt 0n,"",null,undefined,NaN
// iske alawa baki sab truthe value

// some suprising truthy values are:"0"(string k andr 0)
// 'false' , " "(string k andr space),[],{},function(){}

// Nullish Coalescing Operator(??): null and undefined

let val1;
val1=5??10 //database mein kam atab h
// val1=null??10
val1=undefined??15

val1=null??10??20 //jaha v first value miljata h wo assign ho jta h

console.log(val1) 

// ternary opertaor
// condition?true:false