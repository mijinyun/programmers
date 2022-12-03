function solution(sizes) {
    const arr = [...sizes].map((v) => {
        if (v[1] > v[0]) { return [v[0],v[1]] = [v[1],v[0]]}
        else return v;
    })
    
    let ls_x = [];
    let ls_y = [];
    arr.map((v) => { 
        ls_x.push(v[0]);
        ls_y.push(v[1]);
    })
    return Math.max(...ls_x) * Math.max(...ls_y);
}