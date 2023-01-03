function solution(s) {
    let array = [];
    let count = 0;
    
    for (let i=0; i<s.length; i++){
        
        array.push(s[i]);
        
        const same = array.filter(v => v == array[0]);
        const notSame = array.filter(v => v != array[0]);
    
        if (same.length == notSame.length){
            count++;
            array=[];
        }
    }
    
    if (array.length != 0){
        count++;
    }
    
    return count;
}
