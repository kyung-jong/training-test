
let now = new Date();
console.log(now);

let jan02_1970 = new Date(3600 * 24 * 1000);//timestamp
console.log(jan02_1970.getTime());


let date = new Date("2024-01-01");
console.log(date);

let date2 = new Date(2023, 0, 1);
console.log(date2);
console.log(date2.getFullYear());

let date3 = new Date();
console.log(date3.getHours());
console.log(date3.getUTCHours());

let date4 = new Date(2013, 0, 32); // 2013년 1월 32일은 없습니다.
console.log(date4); 

let start = new Date(); // 측정 시작

// 원하는 작업을 수행
for (let i = 0; i < 111000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // 측정 종료

console.log( `반복문을 모두 도는데 ${end - start} 밀리초가 걸렸습니다.` );

console.log(Date.now(), new Date().getTime()); // Date.now() 주로 사용 - 성능이 더 좋음

let start2 = Date.now(); // 측정 시작
// 원하는 작업을 수행
for (let i = 0; i < 111000; i++) {
  let doSomething = i * i * i;
}
let end2 = Date.now(); // 측정 종료
console.log(`${end2 - start2} 걸림`);



let aa = Date.now();
console.log(aa);

let bb = new Date(aa);
console.log(bb);