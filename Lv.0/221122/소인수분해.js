function solution(n) {
    
    let ls=[];
    for (let i=2; i<n+1; i++) {
        if ( n % i == 0) {
            ls.push(i);
        }
    }
    
    const result = ls.filter((v) => {
        let arr = [];
        for (let i=2; i<n+1; i++) {
            if (v%i == 0 ) {
                arr.push(i);
            }
        }
        return arr.length == 1;
    })
    return result;
    
}