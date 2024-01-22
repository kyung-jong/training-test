

const yuJin = {
    name: '안유진',
    year: 2003,
    group: '아이브',
}

for(let key in yuJin){
    console.log(key);
}

console.log("--------------------------");
const iveMembersArray = ['안유진', '가을', '레이'];

for(let key in iveMembersArray){
    console.log(key);
    console.log(iveMembersArray[key]);
}


for(let value of iveMembersArray){
    console.log(value);
}

let number = 0;
while(number < 10){
    number ++;
}
console.log(number);