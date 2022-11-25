function solution(x, n) {
    
    let ls = [];
    let num = x;
    for (let i=1; i<n+1; i++) {
        num = i*x;
        ls.push(num);
    }
    return ls;
}