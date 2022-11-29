function solution(s) {
    const arr = s.split(' ');
    
    const result = arr.map((v) => {
        let EachArr = [...v];
        for (let i=0; i<EachArr.length; i++) {
            if (i%2 == 0) {
                EachArr[i] = EachArr[i].toUpperCase();
            } else {
                EachArr[i] = EachArr[i].toLowerCase();
            }
        }
        return EachArr.join('');
    })
    
    return result.join(' ');
}