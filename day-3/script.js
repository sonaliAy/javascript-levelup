//LOOP
/*for(let i=1;i<=5;i++){
    console.log("good morning everyone");
}*/

// CALCULATE SUM OF 1 TO 5
/*let sum = 0;
for(let i=1;i<=5;i++){
    sum = sum+i;
}
console.log("sum=",sum);
console.log("loop has end ");*/

//WHILE LOOP
/*let i =1;
while(i<=5){
    console.log("i=",i);
    i++;
}*/

//DO-WHILE LOOP
/*let i = 20;
do{
    console.log("hey everyone");
    i++;
}while(i<=10);*/

//EXAMPLE
/*let i = 1;
do{
    console.log("i=",i);
    i++;
}while(i<=5);*/

//FOR-OF LOOP
/*let str = "hey everyone";
for(let i of str){
    console.log("i=",i);
}*/

//EXAMPLE
/*let str = "javascript";
let size = 0;
for(let i of str){
    console.log("i=",i);
    size++;
}
console.log("string size=",size);*/

//FOR- IN LOOP
/*let student ={
    name:"rahul kumar",
    age:20,
    cgpa:7.5,
    ispass:true
};
for(let i in student){
    console.log(i);
}*/

//EXAMPLE
/*let student ={
    name:"rahul kumar",
    age:20,
    cgpa:7.5,
    ispass:true
};
for(let key in student){
    console.log("key=",Key, "value=", student[key]);
}*/

//LET'S PRACTICE
//1.PRINT ALL EVEN NUMBER FROM 1 TO 100
/*for(let num=0;num<=100;num++){
    if(num%2===0){
        //even number
        console.log("num=",num);
    }
}*/

//QUESTION 2
let gamenum = 25;
let usernum = prompt("guess the game number:");
while(usernum !==gamenum){
    usernum = prompt("you entered wrong number.guess again:");
}
console.log("congratulations,you entered the right number");