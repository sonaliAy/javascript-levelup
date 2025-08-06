//ARITHMETIC OPERATOR
/*let a = 5;
let b = 2;
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);*/


//EXAMPLE
/*let a = 3;
let b = 4;
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a**b=",a**b);
console.log("a%b=",a%b);*/


//ASSIGNMENT OPERATOR
/*let a = 5;
let b = 2;
a += 4;  //a=a+4
console.log("a=",a);  
a -= 4 ;  //a=a-4
console.log("a=",a);
a *= 4;  //a=a*4
console.log("a=",a);
a %= 4; //a=a%4
console.log("a=",a);
a **= 4;  //a=a**4
console.log("a=",a);*/

//COMPARISION OPERATOR
/*let a = 5;
let b = 2;
console.log("5==2",a==b);
console.log("5!=2",a!=b);*/

//LOGICAL OPERATOR
/*let a = 6;
let b = 5;
let cond1 = a>b;
let cond2 = a===6;
console.log("cond1 && cond2=",cond1 && cond2);
console.log("cond1 || cond2=",a<b || a===6);
console.log("!(6<5)=",(a<b));*/

//CONDITIONAL STATEMENT
//1.if statement
/*let mode = "dark";
let color;
if(mode==="dark"){
    color="black";
}
if(mode==="light"){
    color="white";
}
console.log(color);*/

//EXAMPLE
/*let age = 25;
if (age>=18){
    console.log("you can vote");
}
if(age<18){
    console.log("you cannot vote");
}*/

//2.IF -ELSE STATEMENT
/*let mode = "dark";
let color;
if(mode==="dark"){
    color="black";
}
else{
    color="white";
}
console.log(color);*/

//EXAMPLE
/*let age = 25;
if (age>=18){
    console.log("you can vote");
}
else{
    console.log("you cannot vote");
}*/

//ODD AND EVEN
/*let num = 10;
if(num%2===0){
    console.log(num,"is even");
}
else{
    console.log(num,"is odd");
}*/


//3.ELSE-IF STATEMENT 
/*let mode = "dark";
let color;
if(mode==="dark"){
    color = "black";
}
else if(mode==="blue"){
    color="blue";
}
else if(mode==="pink"){
    color="pink";
}
else{
    color="white";
}
console.log(color);*/

//TERNARY OPERATOR
/*let age = 25;
let result = age>=18?"adult":"not adult";
console.log(result);*/


//LET'S PRACTICE
//1.MULTIPLE 5 OR NOT

/*let num = ("enter a number:");
if(num % 5===0)
{
    console.log(num," is a multiple of 5");
}
else{
    console.log(num,"is not a multiple of 5");
}*/

//GRADES
let score = 75;
let grade;
if(score>=90 && score<=100)
{
    grade = "A";
}
else if(score>=70 && score<=89){
    grade = "B";
}
else if(score>=60 && score<=69){
    grade = "C";
}
else if(score>=50 && score<=59){
    grade = "D";
}
else if(score>=0 && score<=49){
    grade = "F";
}
console.log("according to your scores,your grade was:",grade);


