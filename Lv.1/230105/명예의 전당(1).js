function solution(k, score) {
    
    let result = [];
    
    for (let i=1; i<score.length+1; i++) {
        
        let answer = '';
        let arr = [...score].slice(0,i);
        answer = Math.min(...arr);
            
        if ( i > k) {
            answer = score.slice(0,i).sort((a,b) => {return b-a})[k-1];
        }
        
        result.push(answer);   
    }
    return result;
}