
const multiply = (x, y) => {
    return x * y;
}

console.log(multiply(3, 4));

console.log('-----------------------');

const multiply2 = (x, y) => x * y;
console.log(multiply2(4, 5));

const multiply3 = x => y => z => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply3(2)(5)(7));

function multiply4(x){
    return function(y){
        return function(z){
            return `x: ${x} y: ${y} z: ${z}`;
        }
    }
}
console.log(multiply4(2)(5)(7));

const multiply5 = function(x, y, z){
    console.log(arguments);
    return x * y * z;
}

console.log(multiply5(4, 5, 6));

const multiplyAll = function(...arguments){
    return Object.values(arguments).reduce((a, b) => a * b, 1);
}

console.log(multiplyAll(1, 2, 3, 5, 5, 5));

console.log('---------------------------------');

console.log(typeof multiplyAll);

console.log(multiplyAll instanceof Object);