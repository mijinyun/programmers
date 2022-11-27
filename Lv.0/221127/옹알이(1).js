function solution(babbling) {
    
    let b_list = ['aya','ye','woo','ma'];
    
    let count = 0;
    const test = [...babbling].map((v) => {
        v = v.replace(/aya|ye|woo|ma/g,'');
        if ( v == '') count++;
    })
    return count;

}