function solution(number, limit, power) {
    // 시간초과 해결    
    let arr = [];
    
    for (let i=1; i<= number; i++){
        let num = 0;
        for (let j=1; j<=i/2; j++){
            if (i % j == 0) num += 1;
        }        
        arr.push(num+1);
    }
    
    let count = 0;
    arr.map((v) => { v > limit ? count += power : count += v;})
    return count;
}
