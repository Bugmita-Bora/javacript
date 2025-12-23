const marvel_heros=["thor","ironman","captainamerica"]
const dc_heros=["superhero","batman","flash"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)//array ke andr array ayega
// yaha 4th element ekcomplete array h
// console.log(marvel_heros[3])
// console.log(marvel_heros[3][1])//not a favourbale way

//  const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros)//yaha new array mein hild kro then u cnn see the dee
// warna ye smjh nhi arha hdiff const allHeros kia h 
//output thora glt arha ye ek he array mein ana chahye the

const all_new_heros=[...marvel_heros,...dc_heros] //spred operator 
console.log(all_new_heros)//cpncat v use krskte h but ye preferable h

const another_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]//rare situatuion
const real_another_array=another_arr.flat(Infinity) //jitna depth h sb resolve krega 
console.log(real_another_array)

console.log(Array .isArray("Bugmita")) //false since ye array nhi h
console.log(Array .from("Bugmita"))//isko array bna dia
console.log(Array.from({name:"Bugmita"}))//interview imp
// result is empty array kyuki ye directlt convert nhi krparha 
// bolna prega ki sirf keys k array banau ya values ka array banau etc

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));


