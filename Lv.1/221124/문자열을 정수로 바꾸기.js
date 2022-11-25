function solution(s) {
    
    const arr = [...s];
    let txt = '';
    
    if (arr[0] == '-') {
        for (let i=1; i<arr.length; i++ ){
            txt += arr[i];
        }
        return -parseInt(txt);
    } else {
        
        for (let i=0; i<arr.length; i++ ){
            txt += arr[i];
        }
        return parseInt(txt);
    }
}


//다른사람 풀이
// string에 *, / 라든가 나누게 되면 자동적으로 자바스크립트에서 str을 num으로 인식한다.
// 자바스크립트는 타입이 매우 유연한 언어라서 알아서 암시적 형변환을 해줌.
//function strToInt(str){
//  return str/1
//  }