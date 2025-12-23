// promise creation
// prosime ko hmesha .then .catch se handle kroge ye nhi h 
// isko async se v handle krskte  h 
// method 1
const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    // DB calls,cryptography,network
    setTimeout(function(){
        console.log('Asyn task is completed')
        resolve() //isse then connect huwa h aur promise consumed
        //show huwa h agr nhi likhte toye show nhi hota
    },1000)
})
// promise consumption

promiseOne.then(function(){
    console.log("promise consumed")
})

//method 2
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
       resolve({username:"Chai",email:"chai@.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user) //then resolve k sath link to function k koi v parameter pass akrwao
    // it will print the resolve k andr kya likhah 
    // .then() does NOT care about the parameter name you write.
    // It receives exactly whatever value you pass to resolve().

})


const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
      let error=true
      if(!error){
        resolve({username:"bugmita",password:"123"})
      }else{
        reject('ERROR:something went wrong')
      }
    },1000)
})

promisefour
.then((user)=>{
   console.log(user)
   return user.username //pr ye return kisko krrha h? isilite wapas.then laagaya
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){ //since error v h..reject wala case h to catch lena prega
    console.log(error)
})
.finally(()=>console.log("promise is either resolved or rejected"))//ye at last mereko bata do ki jo hona tha ki wo huwa ya nhi


const promisefive=new Promise(function(resolve,reject){
     setTimeout(function(){
      let error=true
      if(!error){
        resolve({username:"js",password:"123"})
      }else{
        reject('ERROR:js went wrong')
      }
    },1000)
})
async function consumePromiseFive(){
    try{
          const response=await promisefive
          console.log(response)
    }catch(error){
      console.log(error)  
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try{
//     const response=fetch('https://jsonplaceholder.typicode.com/users')
//     // const data=response.json() sirf ye likne pe print hi horha tha kyuki json conver m time lgrha taha
//     const data=await response.json()
//     // isiliye await likhn pra
//     console.log(data)
//     }catch(error){
//         console.log("E:",error)
//     }
   
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((response)=>{
    console.log(response)
})
.catch((error)=>SVGComponentTransferFunctionElement.log(error))


