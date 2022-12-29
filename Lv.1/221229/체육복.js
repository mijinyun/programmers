function solution(n, lost, reserve) {
    let arr = new Array(n).fill(1);
    
    reserve.forEach((v) => arr[v-1]++);
    lost.forEach((v) => {arr[v-1]--});

    let left = [...arr];
    let right = [...arr];

    for (let i=0; i<left.length-1; i++) {
        if (left[i] >= 2 && left[i+1] == 0) {
            left[i+1]++;
            left[i]--;
        } else if (left[i] >= 2 && left[i-1] == 0) {
            left[i-1]++;
            left[i]--;
        }
    }
    
    for (let j=right.length-1; j>-1; j--) {
        if (right[j] >=2 && right[j-1] == 0) {
            right[j-1]++;
            right[j]--;
        } 
    }
    
    const left_result = [...left].filter(v => v!=0).length;
    const right_result = [...right].filter(v => v!=0).length;
    
    return left_result > right_result ? left_result : right_result;
}
