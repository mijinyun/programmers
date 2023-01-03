function solution(number, limit, power) {
    //내풀이- 시간초과
    let arr = [];
    
    for (let i=1; i<= number; i++){
        let num = [];
        for (let j=1; j<=i; j++){
            if (i % j == 0) num.push(j);
        }        
        arr.push(num.length);
    }
    
    let count = 0;
    arr.map((v) => {
        v > limit ? count += power : count+=v;
    })
    
    return count;
}
