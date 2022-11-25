function solution(n) {
    
    let i = 2;
    while(true) {
        
        if ( n % i == 1) return i;
        else i++;
    }
}