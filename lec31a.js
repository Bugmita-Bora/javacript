// const myNumbers=[1,2,3,4,5,6,7,8,9,10]
// // const newNum=myNumbers.map((num)=>num+10) //apne ap return krega bolna nhi prta
// // console.log(newNum)

// const newNums=myNumbers.map((num)=>num *10).map((num)=>num+1).filter((num)=>num>=40)
// console.log(newNums)

const myNums=[1,2,3]
// const myTotal=myNums.reduce(function (acc,curval){
//     console.log(`acc:${acc} and curval:${curval}`);
//     return acc+curval
// },0)//acc value=0
const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);//shopping cRD MEIN USE hoga

const shoppingCart=[
{
    itemName:"js course",
    price:2999
},
{
    itemName:"py course",
    price:999
},
{
    itemName:"android course",
    price:5999
},
{
    itemName:"data science course",
    price:12999
},
]

const pricetopay=shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(pricetopay)