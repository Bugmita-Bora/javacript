const user={
    username:"Bugs",
    price:999,
     WelcomeMessgae: function(){
        console.log(`${this.username},welcome to website`); //this. for current context
      console.log(this);
      }


}
// user.WelcomeMessgae()
// user.username="Sam"
// user.WelcomeMessgae()
//  console.log(this);//empty since in node enviroment global andr koi context he nhi h 
// so null aya h
// interview:browswer ke andr jo most global object h wo window h


// function chai(){
//    let username="bugss"
//    console.log(this)
//    console.log(this.username) //undefined so this way we cant use 
//    // inside function

// }
// chai();//function k andr this print krwaya to bht kuch aya h dekho

// const chai=function(){
//    let username="bugss"
//    console.log(this.username)
// }
// chai()



const chai=()=>{
   let username="bugss"
   console.log(this.username)
   console.log(this)

}
// chai()


// arrow function

// ()=>{}
   // const addTwo=(num1,num2)=>{
   //    return num1+num2;
   // }

   // console.log(addTwo(3,4)) basic arraow function


   // implicit return mein ye use hota h issmein
   // paranthesis nhi dena hota h

   // const addTwo=(num1,num2)=>num1+num2
   const addTwo=(num1,num2)=>(num1+num2)
   // curly braces mein wrap kra to return statement likhna prega
   // agr paranthesis mein wrap kra to return statement nhi likhna prega
   // this point is very imp for react

   console.log(addTwo(3,4))


   // explicit return when return statement likhna prrha h
//object return kaise hoga tb? parenthesis ke andr curly brackets lgana prega

