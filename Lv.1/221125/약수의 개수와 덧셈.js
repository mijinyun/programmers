function solution(left, right) {
    
    let ls = [];
    for (let i=left; i<right+1; i++) {
        ls.push(i);
    }
    
    const add = ls.map((v) => {
        let arr=[];
        for (let i=1; i<v+1; i++) {
            if ( v % i == 0) arr.push(i);
        }
        return arr.length % 2 == 0 ? '+' : '-';
    })

    let txt = "";
    for (let i=0; i<ls.length; i++) {
        txt += add[i] + ls[i];
    }
    return eval(txt);
    
}