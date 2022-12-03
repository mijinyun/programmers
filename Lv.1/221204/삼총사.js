function solution(number) {
    // n개에서 r개 뽑는 것
    
    let result = 0;
    for (let i=0; i<number.length; i++) {
        for (let j=i+1; j<number.length; j++) {
            for (let k=j+1; k<number.length; k++) {
                number[i]+number[j]+number[k]==0 ? result++ : null;
            }
        }
    }
    return result;
}