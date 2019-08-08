const countSheep = (number)=>{
    if(number){
        for(let i = 0; i < number; i++){
            
            console.log('Another sheep jump over the fence.');
    
        }
        console.log('All sheep jumped over the fence.')
    } else{
        console.log('No sheep to jump over the fence.')
    }
}

countSheep(10);