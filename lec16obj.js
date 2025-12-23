//singleton interview constructor se jo banega wo singleton hoga
// lietrals jo bnega wo singleton nhi hoga(object literals)
//constructor object.cretae
//object literals
const mySym=Symbol("key1")
const jsuser={
    name:"Bugmita",//name:key bugmita is value //system jo name,age ye sab h na "name" iase store krta h
    age:19,//string k jaisa
    [mySym]:"myKey1",
    location:"Assam",
    lastLoginDays:["Monday","Saturday"],
}

console.log(jsuser.age)
//console.log(jsuser[age]) error aya since age ye sb string k jaise store krrhe h
console.log(jsuser["age"])
console.log(jsuser.mySym)//interview:ab iska datatype dekhoge tb pta lgega
// ye symbol datatype declare he nhi hua h
//console.log(typeof jsuser.mySym)//string
// to use it as symbol use sq brackets [mySym]:
console.log(jsuser[mySym])
console.log(typeof jsuser.mySym)

jsuser.age=18 //to change the value
//Object.freeze(jsuser)//used so that we cnt chnage it
jsuser.age=21
console.log(jsuser)

jsuser.greeting=function(){
    console.log("Hello js user");
}
console.log(jsuser.greeting)//undefined scope k locha
console.log(jsuser.greeting())//not a function output mein dekho kyuki humne phele freezekrde
// isiliye usko comment krke dekhi abb

console.log(jsuser.greeting)

jsuser.greetingTwo=function(){
    console.log(`Hello js user,${this.name}`); //refer krrhe h
}

console.log(jsuser.greetingTwo());

// generally jb to kuch nikalemnge to . krke he use krenge
// kuch aise special case hota h specially interview mein pucha jaiga
// jaha squre bracket use kia jata h 





