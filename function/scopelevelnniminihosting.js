function one(){
    const username="Bugmita"
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website); line by line execution ye run nhi huwa to baki k niche v nhi hua
    two()
}
one()

// chote bado se icecream mang skte h pr bade chote se icecream mange to
// achha nhi lgta na 
// yhi ho rha h function 1 bara h to function 2 function 1 se 
// variables mang skta h pr function 1 ..2 se nhi mangskta

if(true){
    const username="hitesh"
    if(username=="hitesh"){
        const website="youtube"
        console.log(username+website)
    }
    // console.log(website)
}
// console.log(username)


//*******************interesting*************** *//

function addone(num){
    return num+1;
}

const add=addone(4)
console.log(add)

// const addtwo=function addtwo(num){
//     return num+2;
// } aise define krne se agr cons ke pehle function cll kre tb error ayega
// lekin aisa addone wale function se pehle kre to nhi ayega