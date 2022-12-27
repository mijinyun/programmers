function solution(t, p) {
    
    const Array = [];
    for (let i=0; i<t.length-p.length+1; i++ ){
        Array.push(t.slice(i,i+p.length));
    }
    const result = Array.filter((v) => { return parseInt(v) <=  parseInt(p)});
    
    return result.length;   
}