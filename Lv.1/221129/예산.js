function solution(d, budget) {
    
    let count = 0;
    let sum = 0;
    let i=0;
    let total = budget;
    
    
    // 최대한 많은 부서의 물품이니까 
    d.sort((a,b) => { return a-b });
    
    for (let i=0; i<d.length; i++) {
        sum += d[i];
    }
    
    while (true) {
        total -= d[i];
        count++;
        i++;
        
        if (total < 0) return count-1;
        else if (total == 0) return count;
        else if (sum < budget) return d.length;
    }
    
}