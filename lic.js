function license_checker(speed) {
    if(speed<70){
        console.log("ok")
    }
    if(speed>70){
        point=0
        for(let i=0;i<=speed;i++){
            point+=1
        }
        if (point>=12){
            console.log("License suspended")
        }
    }
}
license_checker(5)