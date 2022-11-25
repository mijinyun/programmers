function solution(absolutes, signs) {
    let txt = '';
    
    const newSign = [...signs].map((v) => { return v == true ? '+' : '-'});
    
    for (let i=0; i<absolutes.length; i++) {
        txt += newSign[i] + absolutes[i];
    }
    
    return eval(txt);
}