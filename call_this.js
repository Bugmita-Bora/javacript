//CALL
// mman lo ekdm satck ke top me callme h to wo waha kisko cll krega uske upr k stack m to to koi h nhi
// tab kaam ata h this ka jo bta ta h kisko krna h cll
// window mein this=>window
// node mein this={}empty paranthesis ...imp fir interview
function SetUsername(username){
  this.username=username;
}

function createUser(username,email,password){
  // SetUsername(username)//call nhi hoga aise..bs sreference gya h so .call lgta h
  SetUsername.call(username)
  this.email=email;
  this.password=password;
}
const chai=new createUser("chai","chai@google.com","123");
console.log(chai);
