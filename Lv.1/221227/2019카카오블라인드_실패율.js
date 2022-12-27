function solution(N, stages) {
    
    let obj = {};
    
    stages.forEach((v) => {
        if ( v < N+1 ){
            obj[v] !== undefined ? obj[v] += 1 : obj[v] = 1 ;     
        }
    })

    let count=0;
    let stage_data = Object.entries(obj);
    
    for (let i=0; i<stage_data.length; i++) {
        stage_data[i][1] = stage_data[i][1]/(stages.length-count)
        count = count + Object.entries(obj)[i][1];
    }
    
    let arr = stage_data.sort((a,b) => { return b[1]-a[1] });
    arr = arr.map((v) => { return parseInt(v[0])});

    for( let i=1; i<N+1; i++ ){
        if (!arr.includes(i)) arr.push(i);
    }
    return arr;
}