const myArr=[1,2,3,4,5,true,"bugs"] //mix od datatype
//interview-two ways of copying array 
// 1.shallow coppy 2.deep copy study abt these clearly
const myHero=["a","b","c","d"]
const myArr2=new Array(1,2,3,4)//not recomended 
console.log(myArr[4]);
myArr.push(6)
myArr.push(7)
console.log(myArr)

myArr.pop()
console.log(myArr)

myArr.unshift(9)  //unshift pehle element ko add krega wherelse
console.log(myArr) //shift pop jaisa h argument nhi likhenge ye jo first element hoga
// usse nikalega
myArr.shift()
console.log(myArr)

myArr.shift()
console.log(myArr)

console.log(myArr.includes(9)) //ask qstns ie includes ask qsuetion
console.log(myArr.indexOf(9))//-1 simce index mein 9 to h he nhi

const newArr=myArr.join(); //converts the format to string
console.log(myArr)
console.log(newArr)

// slice and splice
console.log("A",myArr)
const myn1=myArr.slice(1,3) //3 include nhi hota h dhyan rakh na
console.log(myn1)



