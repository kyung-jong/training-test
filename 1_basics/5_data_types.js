
const age = 32;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);


const infinity = Infinity;
console.log(infinity);

/**
 * Template Literal
 */

const test1 = `동해물과 "백두산이" / 마르고 닳도록 ~! ''`;
console.log(test1);

let cc = 'cc';
console.log(cc);
cc = `cc"c`;
console.log(cc);

cc = `test \`백틱이다. `;
console.log(cc);

console.log(typeof cc);

cc = `test ${test1}`;

console.log('----------------------------');
let noInit;
console.log(noInit);

let init = null;
console.log(init);

/**
 * Symbol 타입
 */

const test5 = '1';
const test6 = '2';

console.log(test5 === test6);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2);
console.log(symbol1);

/**
 * Object 타입
 */
const dictionary = {
    red: '빨간색',
    orange: '주황색',
    yellow: '노란색',
}

console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary.red);
console.log(typeof dictionary);

/**
 * Array 타입
 */
const iveMembersArray = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];
console.log(iveMembersArray);

/**
 * index
 */
console.log(iveMembersArray[0]);
console.log(iveMembersArray[5]);
console.log(typeof iveMembersArray);

/**
 * static typing
 * dynamic typing
 * JS -> dynamic typing
 */


