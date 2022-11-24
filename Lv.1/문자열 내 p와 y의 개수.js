function solution(s){
    const p_cnt = s.replace(/[pP]/g,'');
    const y_cnt = s.replace(/[yY]/g,'');
    
    if ( p_cnt.length == y_cnt.length ) return true;
    else if (p_cnt.length != y_cnt.length ) return false;
    else return true;
}