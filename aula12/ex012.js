let now = new Date()
let hour = `${now.getHours()}`

console.log(`Now is exactly ${hour} hour(s)`);

if(hour < 6) {
    console.log("Good Morning before 6");
} else if(hour >= 6 && hour < 12) {
    console.log("Good Morning");
} else if(hour >= 12 && hour < 18) {
    console.log("Good Afternoon");
} else {
    console.log("Good Night");
}