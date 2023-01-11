//재귀함수 사례 - 2진수 변환

// (1)
let result = '';

let x = 11;
while(true) {
    if(x%2 == 0) {
        result += '0'
    } else {
        result += '1';
    }

    x = Math.floor(x / 2);

    if (x == 1 || x == 0) {
        result += String(x);
        break;
    }
}

console.log(result.split('').reverse().join(''));


//(2)
function 이진법(숫자) {
    if (숫자 == 1 || 숫자 == 0){
        return String(숫자)
    }

    return 이진법(Math.floor(숫자/2)) + String(숫자 % 2); 
}

console.log(`이진법풀이: ${이진법(11)}`);