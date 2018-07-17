var daysUntilMyBirthday = 60;

for (var i = daysUntilMyBirthday; i>=0; i--) {
    console.log(i)
    if(i>30) {
        console.log("my bday is so long yet, so sad");
    } else if(i<=30 && i>5) {
        console.log("bday getting closer yay");
    } else if(i<=5 && i!==0) {
        console.log("bday so close now, can't wait");
    } else if(i===0) {
        console.log("woohoo its my bday, lets party");
    }

}
