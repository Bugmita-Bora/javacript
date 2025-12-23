//immeduately invoked function expression (iife)
// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

//iife
(function chai(){
    console.log(`DB CONNECTED`);
}) (); //eaha ek semicolon ki jrurat h kyuki iife ko pta nhi chlta kb end krna h
// agr iske bad ek aur fucntion likhe to wo execute nhi hoga kyuki semicolon nhi lgaya h

// ()() global scope ke pollution se problem hoti h kaebar to us
// global scope ke jo  variables h ye jo v declaration h usko hatane ke lia iife use krte h
// naki direct function khtm hone k baad uske execute krne k lia 

(function one(){ //ek function k nam dia h to isse named iife bolte h 
    console.log(`CONNECTED`);
}) (); //semicolon hta k run kro tb error ayega

(()=>{
    console.log(`connected123`)
})();


((name)=>{ //simple iife
    console.log(`connected123${name}`)
})('Bugmita')

