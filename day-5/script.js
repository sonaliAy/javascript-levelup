//function
// function myFunction(){
//     console.log("apna college");
//     console.log("we are learning js");
// }

// myFunction();
// myFunction();
// myFunction();

// function myFunction(msg){
//     //parameter->input
//     console.log(msg);
// }
// myFunction("i love js")//argument


//fuction ->2 number ,sum
// function sum(a,b){
//     console.log(a+b);
// }
// sum(1,3);

// function sum(x,y){
//     s=x+y;
//     return s;
// }
// let val=sum(3,4);
// console.log(val);

//sum function
// function sum(a,b){
//     return a+b;
// }
// const arrowsum =(a,b)=>{
//     console.log(a+b);
// }


// //multiplication
// function mul(a,b){
//     return a*b;
// }
// let arrowmul= (a,b)=>{
//     return a*b;
// };

//LETS PRACTICE
//1. VOWEL STRING


// function countvowels(str){
//     for(const char of str){
//         console.log(char);
//     }
// }
//  countvowels("sonali");

// function countvowels(str){
//     let count = 0;
//     for(const char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// countvowels("apna college");

//2.CREATE AN ARROW FUNCTION TO PERFORM THE SAME TASK
// const countvow = (str) => {
//     let count = 0;
//     for(const char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }
//     }
//     return count;
// }
// countvow("hellocoderarmy");

// FOREACH LOOP IN ARRAYS:
// let arr = [1,2,3,4,5];
// arr.forEach (function printval (val){
//     console.log(val);
// });

// let arr = ["pune","gkp","delhi"];
// arr.forEach((val)=>{
//     console.log(val)
// });


// let arr = ["gkp","pune","pune"];
// arr.forEach((val) =>{
//     console.log(val.toUpperCase());
// });

// let arr = ["gkp","pune","pune"];
//  arr.forEach((val,idx,arr) =>{
//     console.log(val.toUpperCase(),idx,arr);
//  });

//QUESTIONS:
//1.FOR A GIVEN ARRAY OF NUMBER PRINT THE SQUARE OF EACH VALUE USING THE FOREACH LOOP
// let num = [2,3,4,5,6,7];
// num.forEach((num)=>{
//     console.log(num*num);
// });


//MAP
// let nums = [67,34,23];
// nums.map((val)=>{
//     console.log(val)
// }
// )

//2.FILTER
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let evenArray = arr.filter((val)=>{
//     return val%2===0;
// });
// console.log(evenArray);

//3.REDUCE
// const array1 = [1,2,3,4];
// const initialvalue =0;
// const sumwithinitial = array1.reduce((accumulator,currentvalue)=>accumulator+currentvalue,initialvalue);
// console.log(sumwithinitial);

//LARGEST NUMBER IN ANY ARRAY
// let arr = [5,6,78,20];
// const output = arr.reduce((Prev,curr) => {
//     return prev > curr ? prev :curr;
// });
// console.log(output);

//QUESSTIOS:
//1.90+
// let marks = [97,64,32,49,99,89];
//  let toppers = marks.filter((val)=>{
//       return val > 90 ;
// })
// console.log(toppers);


//2.CALCULATE SUM
let n = prompt("enter a number : " );
let arr = [];
for(let i=1;i<=n;i++){
    arr[i-1]=i;

}
console.log(arr);

 let sum = arr.reduce((res,curr)=>{
    return res +curr;
});
console.log("sum=",sum);

let factorial = arr.reduce ((res,curr)=>{
    return res*curr;
});
console.log("factorial= ",factorial);

