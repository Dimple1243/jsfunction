// function perfect(num){
//     var sum=0
//     for(let i=0;i<=num.length;i++){
//         if(num%i===0){
//             sum+=i
//         }
//     }
//     if(sum===num){
//         console.log("perfect num")
//     }
//     else{
//         console.log("not perfect num")
//     }
// }
// perfect(6)
// perfect(11)



function perfect(num){
    sum=0
    for(let i=0;i<=num.length;i++){
    if(num%i === 0){
            sum+=i
        }
    }
    if(sum === num){
        console.log(num," is a perfect number");
    }
    else{
        console.log(num," is not a perfect number");
    }
 }
 perfect(6);