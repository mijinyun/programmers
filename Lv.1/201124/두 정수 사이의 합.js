function solution(a, b) {
    let sum = 0;
    if ( a > b ) {
        for (let i = b; i<a+1; i++) {
            sum += i;
        }
    } else if ( a < b ) {
        for (let i = a; i < b+1; i++ ) {
            sum += i;
        }
    } else sum = a;
    
    return sum;
    
}

// 더 간단하게 표현한 식
let sum = 0;
for (let i = Math.min(a,b); i < Math.max(a,b)+1; i++) {
        sum += i;
}
    return sum;