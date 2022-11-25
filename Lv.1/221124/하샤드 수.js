function solution(x) {
    const arr = String(x).split('');
    let num = 0;
    arr.forEach(v => num += parseInt(v));
    
    if ( x % num == 0) return true;
    else return false;
}