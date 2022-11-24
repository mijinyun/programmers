function solution(n) {
    const arr = String(n).split('').reverse();
    const result = arr.map(v => Number(v));
    return result;
}