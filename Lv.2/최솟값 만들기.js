function solution(A,B){
    A.sort((a,b) => { return a-b});
    B.sort((a,b) => { return b-a});
    
    let sum = 0;
    for(let i=0; i<A.length; i++) {
        sum += A[i] * B[i];
    }
    return sum;
}