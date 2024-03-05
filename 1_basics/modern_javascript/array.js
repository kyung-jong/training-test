
// function camelize(str) {
    
//     let strArr = str.split("-");
//     console.log(strArr);

//     return strArr.reduce((p, n) => (p + n[0].toUpperCase() + n.slice(1)));
// }

function camelize(str) {
    return str
        .split("-")
        .map( (word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1) ).join("");
}

console.log( camelize("test-training-go") );
console.log(camelize("list-style-image"));
console.log(camelize(""));

console.log(["test-123", "aaa"].join(""));


let dataArr =
                [
                    {
                        "dlbrt_reqst_pd_id": "DRPID000000000000001",
                        "tme": 2
                    },
                    {
                        "dlbrt_reqst_pd_id": "DRPID000000000000000",
                        "tme": 1
                    },
                    {
                        "dlbrt_reqst_pd_id": "DRPID000000000000002",
                        "tme": 3
                    }
                ];

console.log(dataArr);

dataArr.forEach(function(item){
    console.log(item.dlbrt_reqst_pd_id);
    console.log(item.tme);
});