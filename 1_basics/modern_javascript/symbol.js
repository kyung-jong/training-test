
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
