function solution(lottos, win_nums) {

    let okNum = []; //맞은 번호
    let n = []; // 미지수 갯수
    lottos.forEach((v) => {
        if ( win_nums.includes(v)) okNum.push(v);
        else if ( v == 0) n.push(v);
    })
    
    // 최고 갯수
    let best = okNum.length + n.length;
    // 최저 갯수
    let bad = okNum.length;

    return [WhatLank(best), WhatLank(bad)];
}

function WhatLank(num) {
    const lank = { 6:1, 5:2, 4:3, 3:4, 2:5 };
    
    return num in lank ? lank[num] : 6;  
}