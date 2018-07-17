
/*
var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";
*/
var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";


if (MINUTE < 30) {
    console.log("It's just after ", HOUR, PERIOD);
} else {
    HOUR ++;
    console.log("It's just before ", HOUR, PERIOD);
}