// let a=10
// const b=20
// var c=30

// // {}ye object ke lia use lekin jb ye function wagera k sath ayega
// // to ye scope jaisa hoga 

// console.log(a);
// console.log(b);
// console.log(c);
// yaha tk koi issue nhi h 
var c=300
let a=300;

if(true){
     let a=10
     const b=20
     var c=30
     console.log("inner:",a)
}
// console.log(a); not defined bola h hona v chaheye since a k kam to } isse pehle khtm hogya kuch return v to nhi kia
// console.log(b); same logic

console.log("Outer:",a); 
console.log(c);//lekin ye 30 print hogya kaise??
// yhi problem h var se 
// jis programmer ne function k upr var c=300 likha wo to pgl hogya hoga na 
// kyuki usne to 300 he dia tha 

// function ke upr h global wo jo v values likh h wo function k andr available h
// but function k andr jo likha h