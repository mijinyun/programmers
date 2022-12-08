function solution(k, m, score) {
    let arr = score.sort((a,b) => { return b-a});

    let sum = 0;
    for (let i=1; i<Math.floor(arr.length/m)+1; i++) {
        sum += arr[m * i - 1] * m;
    }
    
    return sum;
}