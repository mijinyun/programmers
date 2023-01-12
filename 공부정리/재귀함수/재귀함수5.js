// 재귀함수 - 각 자릿수의 합

//(1)
let result = 0;
let x = '123123';
while(true) {
    if (x.length == 1) {
        result += parseInt(x,10);
        break;
    }
    let y = x.split('');
    // console.log(y);
    result += parseInt(y.pop(),10);
    x = y.join('');
}
console.log(result);


//(2) 재귀함수
function 자릿수더하기(숫자){
    if (숫자.length == 1) {
        return parseInt(숫자,10);
    }
    return parseInt(숫자[숫자.length-1],10) + 자릿수더하기(숫자.slice(0,숫자.length-1))

}

console.log(`자릿수더하기: ${자릿수더하기('1231231')}`);