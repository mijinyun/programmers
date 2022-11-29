function changeArr(n,arr) {
    const newArr = [...arr].map((v) => {
        
        if (v.toString(2).length < n) {
            return v = String('0').repeat(n-v.toString(2).length) + v.toString(2);
        } else {
            return v = v.toString(2);
        }
    })
    return newArr;
}

function solution(n, arr1, arr2) {
    
    const ls = [];
    for (let i=0; i<arr1.length; i++) {
        const beforeResult = Number(changeArr(n,arr1)[i]) + Number(changeArr(n,arr2)[i]);
        
        if (String(beforeResult).length < n) {
            ls.push(String('0').repeat(n-String(beforeResult).length) + beforeResult);
        } else {
            ls.push(beforeResult);   
        }
    }
    
    const result = ls.map((v) => {
        return v = String(v).replaceAll('0',' ').replace(/1|2/g,'#');
    })
    
    return result;
} 