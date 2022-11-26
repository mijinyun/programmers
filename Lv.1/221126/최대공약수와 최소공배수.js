function solution(n, m) {
    let ls = [];
    for(let i=1; i<m+1; i++) {
        if((n%i==0)&&(m%i==0)) {
            ls.push(i);
        }
    }
    
    let j = m;
    while (true) {
        if ((j%n==0)&&(j%m==0)) break;
        j++;
    }
    const minNum = ls.sort((a,b) => {return b-a})[0];
    
    return [minNum,j];
}