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

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5));


// ex004

function fatorial(n) {
    if(n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial (5)); 