// setTimeout(function(){
//     console.log("Bugmita")
// },2000)   funcction dia h dusra way

const sayBugmita=function(){
    console.log("Bugmita");
}
//document.querySelector('h1').innerHTML="best js series" //aisa kroge to direct change hoga without taking time

const changeText=function(){
    document.querySelector('h1').innerHTML="best JS series"
}

 const changeme=setTimeout(changeText,2000) //discount offer in a website etc etc insab m kaaam ata h

// setTimeout(sayBugmita,2000) //handler h refernce dia h execute nhi karwa rhe h direct
// sayBugmita() ye execute hota ye glt for set time out bugmita immediately print hoga 
//settimeout k kuch nhi hoga


// abhi kab rokna prega ye v to smjhna prega ki kb cheeze rokna h agr defined inverval mkaam nhi huwa
// to kaise rokenge etc etc ..isiliye stop button laga ya h ki age 2s ke pehle wo clikc kre to 
// chnage nhi hoga text

clearTimeout(changeme)//ref chanaye kiska settimeout clear krna h
// lekin aisa lgage k to faida nhi huwa to settime kia he kyu tha 
// isiliye event pe lagayenge na

document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(changeme)
    console.log("STOPPED")
})