function solution(numbers) {

    let ls = [];
    for (let i=0; i < numbers.length; i++) {
        for (let j=0; j <numbers.length; j++) {
            if ( i != j) {
                ls.push(numbers[i]+numbers[j]);
            }
        }
    }
    return [...new Set(ls)].sort((a,b) => { return a-b});
    
}