// #OOP
// #object
// -collection of properties and methods
// -toLowerCae
// #why use OOP
// #parts of OOP
// object literal
// constructor function
// prototypes
// classes
// instances(new,this)

// #4pillars
// abstraction
// encuplastion
// inheritance
// polymorphism

const user={
    username:"bugmita",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        // console.log("Got user details from database");
        console.log(`Username:${username}`)//unvalid ayega kyuki
//usko pta he nhi h konse username ki baat ho rhi h
// so it is written as
        // console.log(`Username:${this.username}`)
        // agr hum bs this print karwate to kya hota?
        console.log(this);
        // current context mein jo object h wo pura print hoga
    }
}
console.log(user.username);
console.log(user.getUserDetails())
// 'this' used for current context
//if we print in global context
console.log(this)//eaha pe empty paranthesis ayega answer {}
// agr kisi browser mein console mien jake this print karwae to
// bht sare cheexe print hoga kyuki bht sari cheeze global context mein  rehti h browser mein

// constructor function

const promiseOne=new Promise()
const date=new Date()
// new is used to make new context

function User(username,loginCount,signedIn){
      this.username=username; //left wala hamra h aur right wala jo hm pass krrhe h
      this.loginCount=loginCount;
      this.signedIn=signedIn;

      return this //object passon krdia
    //   return this v nhi likhte tb hota ye already implicit defined hota h
}

// const userone=User("bugmita",12,true)
// const usertwo=User("ChaiAurCode",11,false)
// console.log(userone) //usertwo print huwa..overwrite hogai..new keyword lena prega
// constructor function hmehsa ek naya instant dedeta h ek naya copy dedeta h...otiginal wala affect nhi hota h

// so write like this
const userone=new User("bugmita",12,true)
const usertwo=new User("ChaiAurCode",11,false)
console.log(userone)
console.log(usertwo)//alag alag print hoga abhi

  
