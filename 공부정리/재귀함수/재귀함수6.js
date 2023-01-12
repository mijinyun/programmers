//피보나치순열
// 1 1 2 3 5 8 13 21 . . .

//(1)
let a = 1; 
let b = 1;

for (var i=0; i < 5; i++){
    let c = a + b;
    a = b;
    b = c;
}

console.log(b);


//(2) 재귀함수

function 피보나치(숫자){
    if (숫자 == 1 || 숫자==2 ){
        return 1;
    }
    return 피보나치(숫자-1) + 피보나치(숫자-2)
}

console.log(`피보나치: ${피보나치(7)}`);