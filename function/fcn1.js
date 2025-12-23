function sayMyName(){
    console.log("B")
    console.log("U")
    console.log("G")
    console.log("M")
    console.log("I")
    console.log("T")
    console.log("A")

}

sayMyName() //saymyname is reference ()this is paranthesis
function addTwoNumbers(number1,number2){
    console.log(number1+number2)
}
addTwoNumbers()
addTwoNumbers(3,4)
addTwoNumbers(3,"4")

const result=addTwoNumbers(3,5)
console.log("result:",result); //undefined arha h qki console log kia hua h

function sub(num1,num2){
    return (num1-num2);
}
const ans1=sub(5,2)
console.log("result:",ans1)

function loginUserMessgae(username){
    return `${username} just logged in`
}
console.log(loginUserMessgae("Bugmita"))