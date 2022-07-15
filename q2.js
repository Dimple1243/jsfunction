function list(List,List1){
    for(i=0;i<List.length;i++){
        for(i=0;i<List1.length;i++){
            if (List[i]%2===0&&List1[i]%2===0){
                console.log("dono even h");
            }
            else{
                console.log("dono even nhi h");
            }
        }
    }
}
list([2, 6, 18, 10, 3, 75],[6, 19, 24, 12, 3, 87])