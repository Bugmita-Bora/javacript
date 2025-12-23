//from lec 43 sde2-3 interview only
// javascript harnhi manti agr kuch duhundna h to wo grandparent upr jayte rhgea
// jb tk usse null na miole ye through prototype hoga isko prototypal inheritance bolte h ki upr jate rhega dhundne jb tk null nhi  milega

const { useDebugValue } = require("react");

// jo new use kia ,this use kia wo sb prototype k wajah se ,protypal inheritance sb


//  array---->object---->null
// string---->object---->null
// function-->object---->null


// object

function multiplyby5(num){
    return  num*5;
}
// access multiplyby(5)
//method2
multiplyby5.power=2 //declare function kia h . access to object ka hota h
// function v ek object h

console.log(multiplyby5(5));
console.log(multiplyby5.power);//2 print hua
console.log(multiplyby5.prototype);//{}empty paranthesis


function createUser(username,score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`)
}

const chai=new createUser("chai",25)
const tea=new createUser("tea",250)
//ib kiksko increment kre 25 ko ya 250 ko ye porblem h thora
// jisne v bulaya h uske paas jao so this.score++

chai.printMe() //cannot ready property of undefined dikha rhah
// nayi property insert huwa h wo humne bataya nhi h ki inert huwa h 
// so new use krna preg
// 


/*

Here's what happens behind the scenes when the new 
keyword is used:

A new object is created: The new keyword initiates 
the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the 
prototype property of the constructor function. This means 
that it has access to properties and methods defined on the
constructor's prototype.

The constructor is called: The constructor function
is called with the specified arguments and this is 
bound to the newly created object. If no explicit 
return value is specified from the constructor, 
JavaScript assumes this, the newly created object, 
to be the intended return value.

The new object is returned: After the constructor
function has been called, if it doesn't return a 
non-primitive value (object, array, function, etc.), 
the newly created object is returned.

*/

