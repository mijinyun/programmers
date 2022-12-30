function solution(s) {
    
    let arr = [...s];
    let ls = '';
    let result = [];
    
    arr.map((v) => {
        if (!ls.includes(v)){
            result.push(-1);
        } else {
            let item = [...ls].reverse().findIndex(value => value == v);
            result.push(item+1);
        }
        ls += v;
    })
    
    return result;
}