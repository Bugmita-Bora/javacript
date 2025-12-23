let myName="bugmita     "
console.log(myName.length) //11 ayega 6 letter+5space
console.log(myName.trim().length)//6 ayega remaining ignore krega
console.log(myName.truelength)//unvalid ayega
// method bnana prega truelength jisko sb k stah use krapau

let myHeros=["thor","spiderman"]
let heropower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}
Object.prototype.hitesh=function(){
    console.log(`bugmita is present in all objects `)
}
// heropower.bugmita()
myHeros.bugmita()

Array.prototype.heybugmita=function(){
    console.log(`hitesh says hello`)
}
 
heropower.heybugmita() // eror ayega array ka power object m nhi jayega

const TeachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:'JS assignment',
    fulltime:true,
    __proto__:TeachingSupport, //link kia h dono ko
}