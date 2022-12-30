function solution(s) {
    let arr = s.split(' ');
    arr.map(v => parseInt(v));
    
    return Math.min(...arr) + " " + Math.max(...arr);
}