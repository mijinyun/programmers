function solution(answers) {
    let a = [1,2,3,4,5];
    let b = [2,1,2,3,2,4,2,5];
    let c = [3,3,1,1,2,2,4,4,5,5];
    
    let countA=0, 
        countB=0,
        countC=0;
    
    for(let i=0; i< answers.length; i++){
        if (a[i%a.length] == answers[i%answers.length]) countA++;
        if (b[i%b.length] == answers[i%answers.length]) countB++;
        if (c[i%c.length] == answers[i%answers.length]) countC++;
    }
    
    let ls = [countA , countB , countC];
    let maxNum = Math.max(...ls);
    
    let arr = [];
    for(let j=0; j<ls.length; j++) {
        if(ls[j] == Math.max(...ls)) arr.push(j+1);
    }
    return arr;
    
}