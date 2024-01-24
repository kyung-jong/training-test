
let billion = 1000000000;
console.log(billion);
billion = 1e9;

console.log(billion);

// 1마이크로초(백만 분의 1초)
let ms = 0.000001;
console.log(ms);

ms = 1e-6;
console.log(ms);

console.log('-------------------------------');

// 16진수 0x를 사용해 표현
console.log(0xFF);

console.log( 0xA + 0xF );

// 2진수
console.log(0b11111111);

// 8진수
console.log(0o377);

console.log('--------------------------');

let num = 255;
console.log( num.toString(16) );

// 점 두 개 - 숫자를 대상으로 메서드를 직접 호출할 때
console.log( 123456..toString(2) );

// 어림수 구하기 - 소수점 첫째 자리에서 내림
console.log( Math.floor(3.555) );

// 소수점 첫째 자리에서 올ㄹ림
console.log( Math.ceil(3.555) );

console.log( Math.round(3.5) );

num = 1.2345;
console.log( num.toFixed(1) ); //문자열로 반환
console.log(num);


console.log( 0.1.toFixed(20) );

console.log(9999999999999999);

console.log(typeof NaN);

console.log( isNaN("a") );

// isFinite(value) - 인수를 숫자로 변환하고 변환한 숫자가 NaN/Infinity/-Infinity 가 아닌 일반 숫자인 경우 true를 반환한다.
console.log( isFinite("a") );


// Object.is 는 === 처럼 값을 비교할 때 사용되는 특별한 내장 메서드, ===보다 좀 더 신뢰할만한 결과를 보여줌. NaN을 대상으로 비교, 0과 -0이 다르게 취급되어야 할 때
console.log( NaN === NaN );
console.log( Object.is(NaN, NaN) );

console.log( parseInt("100px") );

console.log( Math.random() );

// 최대값
console.log( Math.max(1, 2, 5, 6, 7, 8, 9) );

// 최소값
console.log( Math.min(2, 5, 6) );

// Max.pow(n, power)
console.log( Math.pow(2, 10) ); // 2의 10제곱

console.log('------------------');
