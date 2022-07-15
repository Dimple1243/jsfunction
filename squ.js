function squares_of_numbers(limit){
    var output={}
    for(var i=1;i<=limit;i++){
        output[i]=i*i
    }
    console.log(output);
 }
 squares_of_numbers(20)