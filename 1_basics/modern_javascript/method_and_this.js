
let user = {
    name: "John",
    age: 30,
}

user.sayHi = function(){
    console.log("하이");
}

user.sayHi();

console.log('-------------------------------');

user = {
    sayHi(){
        console.log("하이~!");
    }
}

user.sayHi();

console.log('-------------------------------');


let calculator = {
    //firstValue: 0,
    //secondValue: 0,
    read(a, b){
        this.firstValue = a;
        this.secondValue = b;
    },
    sum(){
        return this.firstValue + this.secondValue;
    },
    mul(){
        return this.firstValue * this.secondValue;
    }
}

calculator.read(6, 6);
console.log(`합 : ${calculator.sum()}`);
console.log(`곱하기 : ${calculator.mul()}`);



const approvalObj = {
	approval(){
        console.log(this);
		this.supplement();
	},
	supplement(){
		console.log('123');
	},
	reject(){
		
	},
	openResnLayer(){
		
	},
	submitExe(){
		
	}
}

approvalObj.approval();

console.log('-----------------------------');

// let ladder = {
//     step: 0,
//     up(){
//         this.step++;
//     },
//     down(){
//         this.step--;
//     },
//     showStep(){
//         console.log(this.step);
//     }
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

/** 체이닝 */
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log(this.step);
        return this;
    }
};

ladder.up().up().down().showStep();

