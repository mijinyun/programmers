function solution(arr) {
    const ReArr = arr.filter((v) => v != Math.min(...arr));
    
    return ReArr.length != 0 ? ReArr : [-1];
}