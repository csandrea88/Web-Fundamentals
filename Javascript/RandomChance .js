
function RandomChance(qtrs) {
    
    
    
    for (var i=1; i<=100; i++){
        console.log("Loop: " + i, "qtrs: " + qtrs);
        if (qtrs > 0){   // if I have quarters to play then play
            qtrs--;
            if(Math.floor(Math.random() * 3) + 1 === 3) {
                qtrs += Math.floor(Math.random() * 50) + 50;
                return qtrs;
           }
        } else {
            console.log("Your done no more quarters");
            return qtrs;
        }
        
    }
  
      

}
console.log(RandomChance(2));
//qtrs = Math.floor(Math.random() * (max - min + 1)) + min

