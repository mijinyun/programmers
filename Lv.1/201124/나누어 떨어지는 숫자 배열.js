function solution(arr, divisor) {
    
    let ls = [];
    arr.forEach((v) => {
        if ( v % divisor == 0) ls.push(v);
    })
    return ls.length != 0 ? ls.sort((a,b) => { return a-b}) : [-1]
}