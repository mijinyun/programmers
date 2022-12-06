function solution(a, b, n) {
   
    let coke = n;
    let cnt = 0;
    
    while(coke >= a) {
        
        cnt += b * Math.floor(coke/a);
        coke = coke - a * Math.floor(coke/a) + b * Math.floor(coke/a);

    }
    
    return cnt;
    
    
}