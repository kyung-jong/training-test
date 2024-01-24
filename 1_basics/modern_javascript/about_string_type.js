/**
 * 자바스크립트 모든 문자열은 페이지 인코딩 방식과 상관없이 항상 UTF-16형식을 따릅니다.
 */

// 특수문자 유니코드
console.log( "\u00A9" );
console.log( "\u{20331}" );
console.log( "\u{1F60D}" );
console.log("😍");

console.log( "Interface".toUpperCase() );
console.log( "Interface".toLowerCase() );

console.log( "interface"[0].toUpperCase() );

let str = 'Widget with id';
console.log( str.indexOf('Widget') );
console.log( str.indexOf('widget') );
console.log( str.indexOf('id', 2) );

let str2 = "As sly as a fox, as strong as an ox";
let target = "as";

let pos = 0;
while (true) {
    let foundPos = str2.indexOf(target, pos);
    if (foundPos == -1) break;

    console.log(`위치: ${foundPos}`);
    pos = foundPos + 1;
}
console.log( str2.lastIndexOf('as') );

console.log('---------------------위의 내용은 오래된 자바스크립트');
console.log('모던 자바스크립트에서는 .includes 메서드를 사용해 부분 문자열 포함 여부를 검사');

//포함 여부
console.log( "Widget with id".includes("Widget") );
console.log( "Widget with id".includes("id", 3) );

console.log( "Widget".startsWith("Wid") );
console.log( "Widget".endsWith("get") );

console.log('------------------------------');

// 부분 문자열 추출 substring, substr, slice
// slice만 쓰는걸로
let str3 = "stringify";
console.log( str3.slice(0, 5) );
console.log( str3.slice(0, 1) );
console.log( str3.slice(2) );
console.log( str3.slice(-4, -1) );//음수는 문자열 끝에서부터

console.log( str3.substring(2, 6) );
console.log( str3.substring(6, 2) );//start가 end보다 커도 괜찮다. 음수는 안됨
console.log( str3.substring(10, 2) );

console.log( str3.substr(2, 4) );// 2번째부터 글자 4개 - 음수는 끝에서. - 사용 x


console.log('--------------------------------------------------');
// 모든 문자열은 UTF-16을 사용해 인코딩되는데, UTF-16에선 모든 글자가 숫자 형식의 코드와 매칭됩니다. 코드로 글자를 얻거나 글자에서 연관 코드를 알아낼 수 있는 메서드는 다음과 같습니다.
console.log( "z".codePointAt(0) ); //122
console.log( "Z".codePointAt(0) ); //90

console.log( String.fromCodePoint(122) ); //z
console.log( String.fromCodePoint(90) ); //Z

console.log( "\u005a" );//Z, 90을 16진수로

let str4 = '';
for (let i = 65; i <= 220; i++) {
    str4 += String.fromCodePoint(i);
}
console.log(str4);

console.log( "aaa".localeCompare("bbb") );

//console.log("가".length);

console.log(" aa a ".trim());

console.log( "abcd".repeat(3) );

function ucFirst(name) {
    if(!name) return str;
    
    //name[0].toUpperCase();
    console.log(name[0].toUpperCase());
    console.log(name.slice(1));
    
    return name[0].toUpperCase() + name.slice(1);
}

function checkSpam(str) {
    
    let upStr = str.toUpperCase;
    return upStr.includes("VIAGRA") || upStr.includes("XXX");
}

function truncate(str, maxlength) {
    if( str.length > maxlength ) {
        return str.slice(0, maxlength - 1) + "\u2026";
    }
    return str;
}

console.log( truncate("What I'd like to tell on this topic is:", 20) );
console.log( truncate("Hi everyone!", 20) );

console.log( "…".codePointAt() ); //.(점) 3개가 아님. 연관코드 8230
console.log( 8230..toString(16) ); //8230은 16진수 : 2026 
console.log( "\u2026" ); //이게 생략부호네.

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };

console.log(typeof student);

console.log(JSON.stringify(student));