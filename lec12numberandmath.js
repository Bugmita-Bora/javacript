const score=400//automatically bad mein ye khud smjha he ki y e=number h
const balance=new Number(100) //specially humne bola h ki number he hoga
console.log(balance)
console.log(score)
console.log(balance.toString())
console.log(balance.toFixed(2))//used e ecommerce app while calculating gst and all
// when usuers dont want to see long precesiom we trim them down by tofixed
const othernumber=23.8966
console.log(othernumber.toPrecision(3))
const x=1123.8966
console.log(x.toPrecision(3))
const hundreds=1000000 //in order to count zeros aise dekhna mushkil h isiliye
console.log(hundreds.toLocaleString()); //default value us wale se ayega jo unke comma laganeka system h 
console.log(hundreds.toLocaleString('en-IN'));
//ab ye indian system k according comma add honnge
// eaha ye nhi aya since mere system k default browser indian origin m h to default usko lerha h isiliye ''specify kro
// qki sapka system browser alag hoga na 
console.log(hundreds.toLocaleString('en-US'));
console.log(Math)
console.log(Math.abs(-4)) //negative positive mein convert hoga aur positive whi rhega since mod h na ye to
console.log(Math.round(-4.6))
console.log(Math.ceil(-4.2)) //ceil bara value he round off krega 
console.log(Math.ceil(4.2))//4.2 he h since ceil h to greter number i.e 4 he select krega
console.log(Math.floor(4.2))//floor hmesha niche wali value he lega
console.log(Math.floor(4.8))
// round he use hoga mostly rarely ceil n flooe use hoga
console.log(Math.max(4.8,3,2,1))
console.log(Math.min(4.8,3,2,1))

// math function ab hm kaha sbse jyada use krne wale h?random function of math ye use hoga
console.log(Math.random()) //alwyas between 0 and 1
console.log(Math.random()*10)//ab range 0 to 10 aya
console.log(Math.random()+1)//  to avoid 0 as the answer since ye v possibility h tp +1 lrte h ab [1,10] ayega
console.log(Math.floor(Math.random()*10)+1);
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min +1))+min)//take in to 10 aye h sincemin h
 











