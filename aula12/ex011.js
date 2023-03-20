var age = 14

console.log(`You have ${age} years old`);

if(age < 16) {
    console.log("No vote.");
} else if(age >= 16 && age < 18 || age > 65) {   /* It could be: (age < 18 || age > 65) */
    console.log("Optional vote.");
} else {
    console.log("Mandatory vote.");
}
