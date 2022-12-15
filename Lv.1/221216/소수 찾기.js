function isPrimeNumber(num) {
    for (let j=2; j<= Math.sqrt(num); j++) {
        if (num % j == 0) return false;
    }
    return true;
}


function solution(n) {
    
    let count = 0 ;
    
    for (let i=2; i<=n; i++) {
        if (isPrimeNumber(i)) count++;
    }
    return count;
}

// 내풀이 => 유효성 문제 발생