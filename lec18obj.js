// de-structure array aur obj dono kk he hota h array k desrct is very rare
const course={
    coursename:"js in hindi",
    price:"999",
    teacher:"Hitesh",
}

// course.teacher
const{teacher:t}=course //de struct 
console.log(t)

// const navbar=({company})=>{ ye react mein use deko eaha v destruct kia h
// curly braces lga kr agr nhi krte to prop.smthng ye hmesha lijhna parta to
// aise dedrtuct krte h

// }
// navbar(company="hitesh")



// API jab v apne kaam dusre pe dalna ho to api kro
// pehle api xml mein ata tha bht complez abhi jason mein ata he 
// jason simply {
//  } ye curly braces he h 


// {
//     "name":"Bugmita", kuch v error nhi h syntax m aise h ered arha j
//     "coursename":"js in hindi",
//     "price":"free"
// }

// api objest ke form mein he nhi array k form mein v hota h
//  aise [
// {},
//  ]



