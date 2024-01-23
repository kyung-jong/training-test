
let searchText = '제출완료';
let replaceText = '신청완료';

let currentText = '\n\t\t\t\t\t\t\t\t\t전체\n\t\t\t\t\t\t\t\t\t제출완료보완요청승인반려\n\t\t\t\t\t\t\t\t';//$('#search_atrz_sttus_code').text();
console.log(currentText);
var nextText = currentText.replace(searchText, replaceText);

console.log(nextText);