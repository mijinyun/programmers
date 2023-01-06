let animals = ['척추동물', '어류', '척추동물', '무척추동물', '파충류', '척추동물', '어류', '파충류'];

// 1회 : ['척추동물'] false 1분
// 2회 : ['척추동물','어류'] false 1분
// 3회 : ['어류','척추동물'] true 1초
// 4회 : ['어류','척추동물' ,'무척추동물' ] false 1분

// 5회 : ['척추동물' ,'무척추동물','파충류'] false 1분
// 6회 :  ['무척추동물','파충류','척추동물' ] true 1초
// 7회 : ['파충류','척추동물','어류' ] false 1분
// 8회 : ['척추동물','어류','파충류' ] true 1초


let arr = [];
let sec = 0;
let min = 0;

for (let i=0; i<animals.length; i++){

    if (arr.length < 3) {
        if(!arr.includes(animals[i])){
            arr.push(animals[i]);
            min++;
        } else {
            arr.reverse();
            sec++;
        }
    } else {
        if(!arr.includes(animals[i])){
            min++;
        } else {
            sec++;
        }
        arr.shift();
        arr.push(animals[i]);
    }
}

console.log(`${min}분 ${sec}초`);