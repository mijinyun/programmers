function solution(s) {

    const arr = [...s].map((v) => {return v.charCodeAt(0);})
    const rearr = arr.sort((a,b) => { return b-a}).map(v => String.fromCharCode(v));
    return rearr.join('');
    
}