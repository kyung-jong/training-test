
// let id1 = Symbol("id");
// let id2 = Symbol("id");

// console.log(id1 === id2);

// console.log(id1);
// console.log(id1.toString());
// console.log(id1.description);

let user = {
    name: "John",
};

let id = Symbol("id");
user[id] = 1;
console.log(user[id]);


for (let key in user) {
    console.log(key);
};

/** Object.assign은 키가 심볼인 프로퍼티를 배제하지 않고 객체 내 모든 프로퍼티를 복사한다. */
let clone = Object.assign({}, user);
console.log(clone[id]);


console.log('----------------------------');

let id2 = Symbol.for("id");
let id2Again = Symbol.for("id");
console.log(id2 === id2Again);