function solution(participant, completion) {
    
    let total = {};
    
    participant.map((v) => { total[v] == undefined ? total[v] = 1 : total[v]++; });
    // completion.map((v) => { Object.keys(total).includes(v) && total[v]--; })
    completion.map(v => total[v]--)
    return Object.keys(total).filter(key => total[key] > 0).toString();
}