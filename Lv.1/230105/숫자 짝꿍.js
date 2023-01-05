function solution(X, Y) {
    
    let arr = [];
    let obj = {};
    
    for (const X_data of X){
        obj[X_data] == undefined ? obj[X_data] = 1 : obj[X_data]++;
    }
    
    for (const Y_data of Y){
        if(obj[Y_data]) {
            arr.push(Y_data);
            obj[Y_data]--;
        }
    }
    
    arr.sort((a,b) => { return b-a });
    
    if (arr.length == 0) return "-1";
    else if (arr[0] == 0) return "0";
    else return arr.map(v => v+'').join('');
    
}