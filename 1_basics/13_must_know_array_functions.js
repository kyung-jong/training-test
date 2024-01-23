/**
 * Array Functions
 */

let iveMembers = [
    '안유진',
    '가을',
    '레이',
];
console.log(iveMembers);

// push() - 맨끝에 추가하고 길이 반환
console.log(iveMembers.push('테스트'));
console.log(iveMembers);

console.log('--------------------');

// pop() - 마지막 삭제 후 반환
console.log(iveMembers.pop());
console.log(iveMembers);

// shift() - 첫번째 값 삭제 후 반환
console.log(iveMembers.shift());
console.log(iveMembers);

// unshift() - 첫번째 추가 후 길이반환
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);

console.log('---------------');

// splice - 0부터 2개 삭제 후 삭제 된 값 배열로 반환
console.log(iveMembers.splice(0, 2));
console.log(iveMembers);

console.log('--------------- 위에꺼는 잘 안씀');

iveMembers = [
    '안유진',
    '가을',
    '레이',
];

console.log(iveMembers);

// concat() - 마지막에 추가하고 실제 배열은 그대로 - push와 다른점
console.log(iveMembers.concat('테스트'));
console.log(iveMembers);

// slice() - 0 ~ 2까지 잘라서 반환, 실제 배열은 그대로
console.log(iveMembers.slice(0, 2));
console.log(iveMembers);

// spread operator - 다른 메모리에 생성
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2);

let iveMember3 = [
    iveMembers
];
console.log(iveMember3);

let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);


//console.log([...iveMembers] === iveMembers ) ;

// join()
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

// sort()
iveMembers.sort();
console.log(iveMembers);

console.log(iveMembers.reverse());

let numbers = [
    1,
    9,
    7,
    5,
    3
];

console.log(numbers);


numbers.sort((a, b) =>{
    return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => {
    return a > b ? -1 : 1;
});

// map() - 배열의 모든 값 순회 - 새로운 array 반환
console.log(iveMembers.map((x) => x));
console.log(iveMembers);
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
    if(x === '안유진'){
        return `아이브: ${x}`;
    }else{
        return x;
    }
}));

console.log(iveMembers);

console.log('-----------------------');

// filter()
numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter((x) => x % 2 === 0)); //true 인것 반환

// find()
console.log(numbers.find((x) => x % 2 === 0));//해당되는 가장 첫번째 값 반환

// findIdx()
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0));
