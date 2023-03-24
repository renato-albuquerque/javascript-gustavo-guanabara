let num = [5, 8, 2, 9, 3]

num.push(1)
num.sort()
console.log(num);
console.log(`This array has ${num.length} positions`);
console.log(`The first value of the array is ${num[0]}`);

let pos = num.indexOf(3)

if(pos == -1) {
    console.log(`Value not found.`);
} else {
    console.log(`The value is in the position ${pos}`);
}
