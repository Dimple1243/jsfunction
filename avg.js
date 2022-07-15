function avgOfthreenum(num1,num2,num3){
    console.log("sum= ",num1+num2+num3)
    console.log("avg= ",num1+num2+num3/3)
}
const input=require("readline-sync")
let n1=input.question("enter num1")
let n2=input.question("enter num2")
let n3=input.question("enter the num3")
avgOfthreenum(n1,n2,n3)