function multiplesOfNumbers(limit){
    sum=0
    for(let i=0;i<=limit;i++){
        if(i%3===0){
            sum+=i
        }
        if(i%5===0){
            sum+=i
        }
    }
    console.log(sum)

}
multiplesOfNumbers(10)

