function solution(numbers, k) {
    let ind = 0;    
    
    for (let i=0; i<k-1; i++) {
        
        ind += 2;
        
        if (ind > numbers.length) {
            ind -= numbers.length;
        }
    }
    
    return numbers[ind];
}