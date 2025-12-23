// shopping card whaha pta nhiu kitna items ade wale h koi add kia 
// jarha h hume pta nhi chlega
function calculateCartPrice(...num1){//rest jitna v elemnt milrhs h usko
    return num1 //usko ek expecific jagah mein do
}
console.log(calculateCartPrice(200,400,500))

function calculate(val1,val2,...num1){//rest jitna v elemnt milrhs h usko
    return num1 //usko ek expecific jagah mein do
}
console.log(calculate(200,400,500,2000)) //200,400 val1,val2 mein store kia
// baki array mein show hua h

const user={
    name:"Bugmita",
    price:450,

}
function handleObject(anyobject){ //annyobject isiliye lia h kyuki handel ko nhu pta h
    // user ayega bugmita ayega ya api kuch ayega
    console.log(`Username is ${anyobject.name} and price is
        ${anyobject.price}`);

}
// handleObject(user)
// another way to pass--
handleObject({
    name:"suhani",
    price:999
})

const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]  //jovalye fetch krni h yo likho
}
// console.log(returnSecondValue(myNewArray)) or direct de skte h see below
console.log(returnSecondValue([1,5,8,9,4,5,6,7,34,,2]))

