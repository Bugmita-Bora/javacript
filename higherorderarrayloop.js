// arrays speciic loops
// for of loop
// const arr=[1,2,3,4,5]
// for (const i of arr) { //arr boldia apne aap dekhega size wagera dekhna ki koi jrurat he nhi h
//     console.log(i);
    
// }

// const greetings="Hello World!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
    
// }

// Maps
const map=new Map() 
map.set('IN',"India")
map.set('FR',"France")
map.set('JP',"JAPAN")
console.log(map);

// for (const key of map) {
//     console.log(key)
    
// }

// for (const [key,value] of map) {
//     console.log(key,':-',value);
    
// }

// const myObject={
//     'Game1':'NFS',
//     'Game2':'gta',


// }
// for (const [key,value] of myObject) { //objects mein kam nnhi krega ye iteration
//     console.log(key,':-',value);
    
// }

// const myObject1={
//     js:'javascript',
//     cpp:'c++',
//     rb:'ruby',
//     c:'c'
// }
// for (const key in myObject1) {
//     console.log(key);
    
// }
// for (const key in myObject1) {
//     console.log(`${key} shortcut is for ${myObject1[key]}`);
    
// }
// for in sirf objects ke lia he nhi
const programming=["js","cpp","c","py","java"]
// for (const key in programming) {
//     console.log(programming[key]);
    
// }
// map pe aise iterate nhi hoga kyuki map iteratable mhi h

// programming.forEach(function (val){
//     console.log(val)

// })

// programming.forEach((item)=>{
//     console.log(item);
// })

programming.forEach((item,index,arr)=>{
    console.log(item,index,arr);

})

const myCoding=[
    {
    languageName:"javascript",
    languageFileName:"js"
    },
      {
    languageName:"python",
    languageFileName:"py"
    },
      {
    languageName:"c++",
    languageFileName:"cpp"
    },
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
}) //this is very imp fro database

