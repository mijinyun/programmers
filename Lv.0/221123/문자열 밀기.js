function solution(A, B) {
    
    const arr = [...A];
    
    let ls = [];
    for (let i=0; i<arr.length; i++) {
        
        const last = arr.pop();
        arr.unshift(last);
        ls.push(arr.join(''));
    }
    // console.log(ls);
 
    if (A == B) return 0;
    return ls.includes(B) ? ls.findIndex(v => v == B)+1 : -1
}