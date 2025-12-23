const tinderUser= new Object()
// const tinderUser={} same he h ye singleton h bss upr wala nhi
tinderUser.id="123abc"
tinderUser.name="sam"
tinderUser.isLoggedIn=false

// console.log(tinderUser)

const regularUser={
    email:"bugs@gmai.com",
    fullname:{
        username:{
            fistname:"Bugmita",
            lastname:"Bora"
        }
    }
}
//console.log(regularUser.fullname.username)
console.log(regularUser.fullname?.username)//jb api se response ata h
// tb ? use krte h taki incase aagr full name jaise object exists h nhi krga tb error na agae

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3=Object.assign(obj1,obj2)
// const obj4=Object.assign({},obj1,obj2)//good practice to declare an empty obj first
//tb {}ye target hoga aur obj1,2 source but agr {} mhi krte to obj1
// target hota aur obj 2 soyrce 

// console.log(obj3)
// console.log(obj4)

//or simply spread use kro jaise array m kia tha

const obj3={...obj1,...obj2}//bst way
console.log(obj3);

// jb database se value ayegi
const users= [
    {
        id:1,
        email:"abc@gail.com"
    },
    {
        id:2,
        email:"def@gail.com"
    },
]       //array of objects ayenge
users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser));//very imp fro database ..projects mein use
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//ye very less used

console.log(tinderUser.hasOwnProperty('isLoggedIn'))//to check if available 