function solution(numbers) {
    let sum = 0;
    for (let i=0; i<10; i++) {
        sum += i;
    }    
    
    numbers.forEach(v => sum -= v);
    return sum;
}