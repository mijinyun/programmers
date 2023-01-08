function solution(s) {
    let arr = s.split(' ');
    const result = arr.map((val) => {
        return val ? val[0].toUpperCase() + val.slice(1).toLowerCase() : ''   
    })
    
    return result.join(' ');
}