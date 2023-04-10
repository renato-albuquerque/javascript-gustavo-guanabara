// ex001

function evenOdd(n) {
    if(n % 2 == 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

let result = evenOdd(11)
console.log(result);


// ex002

function sum(n1=0, n2=0) {
    return n1 + n2
}

console.log(sum(2, 5));


// ex003

function factorial(n) {
    let fact = 1
    for(let c = n; c > 1; c--) {
        fact *= c
    }
    return fact
}

console.log(factorial(5));


// ex004

function factorial(n) {
    if(n == 1) {
        return 1
    } else {
        return n * factorial(n-1)
    }
}

console.log(factorial (5)); 