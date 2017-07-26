

let sum = function () {
    let result = 0;
    
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    
    return result;
}

let sum2 = sum;

let res = sum2(1,2,3);

console.log(res());

/*function rec(number) {
    for (let i = 0; i <= number; i++) {
        console.log(i);
    }
}

rec(10);
*/