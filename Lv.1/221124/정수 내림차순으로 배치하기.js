function solution(n) {
    const result = String(n).split('').sort((a,b) => {return b-a});
    return 1*result.join('');
}