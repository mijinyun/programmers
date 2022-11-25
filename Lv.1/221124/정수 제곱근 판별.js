function solution(n) {
    let i=1;
    
    while ( i < n+1 ) {
        if ( Math.sqrt(n) == i) return Math.pow(i+1,2); 
        else i++;
        
        if ( i == n ) return -1;
    }
}