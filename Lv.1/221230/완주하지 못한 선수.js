// 테스트 케이스 통과 & 효율성 미통과

function solution(participant, completion) {
    
    let total = {};
    
    participant.map((v) => { total[v] == undefined ? total[v] = 1 : total[v]++; });
    completion.map((v) => { Object.keys(total).includes(v) && total[v]--; })
    return Object.keys(total).find(key => total[key] == 1) 
}