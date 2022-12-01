function solution(array, commands) {
    
    let ls = [];
    
    for (let i=0; i<commands.length; i++) {
        let arr = [...array].slice(commands[i][0]-1,commands[i][1]).sort((a,b) => {return a-b});
        ls.push(arr[commands[i][2]-1]);    
    }
    return ls;
}