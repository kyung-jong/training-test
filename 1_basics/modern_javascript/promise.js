
//promise 기본
// let promise = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve("promise 로직처리");
//         //reject(new Error("에러"));
//     }, 1000);
// });

// promise.then(
//     result => console.log(result),
//     error => console.log(error)
// );

// console.log("이게 먼저 실행");

/*
// catch 사용
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("에러임!"));
    }, 1000);
});


//.then(null,f)과 같음
promise.catch(error => {
    console.log(error.toString());
}).finally(() =>{
    console.log("finally");
});
*/

// 프라미스로 지연 만들기

// function delay(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("3초후 실행");
//         }, ms);
//     });
// }

// delay(3000).then(
//     (result) => console.log(result)
// );


fetch("http://localhost:8080")
.then(function(response) {
    //console.log(result);
    return response.text()
})
.then((text) => {
    console.log(text);
});


