function solution(n) {
    let txt = "";
    let i=0;
    
    while(i<n) {
        i++;
        if ( i % 2 != 0 ) txt += "수";
        else txt +="박";    
    }
    
    return txt;
}