function solution(a, b) {
    
    // 공약수 찾기
    let ls = [];
    for (let i=2; i<a+1; i++) {
        if ( (a%i == 0) && (b%i == 0 )) {
            ls.push(i);
        }
    }
    let maxNum = ls.sort((a,b) => { return b-a});
    
    
    //1. 기약분수가 아닐때
    if (ls.length != 0) {
        a = a / maxNum[0];
        b = b / maxNum[0];
    }   
        // 2, 5 또는 다른 인수가 있으면 return 2;아니면 return 1;
        let getNum = [];
        for (let j=2; j<b+1; j++) {
            if ( b % j == 0) { getNum.push(j) }
        }
        const getArr = [...getNum].filter((v) => { return v %2 != 0 && v % 5 != 0 });
        
        return getArr.length == 0 ? 1 : 2;
           
}