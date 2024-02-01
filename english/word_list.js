// 단어 클래스
class Word {
    name;
    desc;
    etc;
    constructor (name, desc, etc){
        this.name = name;
        this.desc = desc;
        this.etc = etc;
    }
}

// 단어장 클래스
class WordNote {
    wordList;
    constructor (name, desc, etc) {
        this.wordList = [];
    }

    add (name, desc, etc) {
        this.wordList.push(new Word(name, desc, etc));
    }
}

let wordNote = new WordNote();

function add(name, desc, etc){
    wordNote.add(name, desc, etc);
}

add(`fulfilled`, `성취감을 느끼는 (↔unfulfilled)`, `[fʊlˈfɪld]`);
add(`describe`, `(~이 어떠한지를) 말하다[서술하다], 묘사하다`, `[dɪˈskraɪb]`);
add(`resolve`, `(문제 등을) 해결하다 (=settle) | (단호한) 결심[결의/의지] (=resolution)`, `[rɪˈzɑːlv]`);
add(`parse`, `(문장을 문법적으로) 분석하다`, `[pɑːrs]`);
add(`apply`, `1신청하다, 지원하다 | 2쓰다, 적용하다`, `[əˈplaɪ]`);
add(`illegal`, `불법적인 (↔legal) | (외국인) 불법 체류자[노동자]`, `[ɪˈliːɡl]`);
add(`consumer`, `소비자 (→producer)`, `[kən│suːmə(r)]`);

console.log( wordNote.wordList );

