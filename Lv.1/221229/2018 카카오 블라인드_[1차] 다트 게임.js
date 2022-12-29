function solution(dartResult) {
    
    let cnt = 0;
    let answer = [];
    
    for (let i=0; i<dartResult.length; i++) {
        if(dartResult[i].match(/[0-9]/)) {
            if (dartResult[i] == '1' && dartResult[i+1] =='0'){
                cnt = 10;
                i++;
            } else cnt = dartResult[i];
        }
        else if (dartResult[i] == 'S') answer.push(Math.pow(cnt,1));
        else if (dartResult[i] == 'D') answer.push(Math.pow(cnt,2));
        else if (dartResult[i] == 'T') answer.push(Math.pow(cnt,3));
        else if (dartResult[i] == '*') {
            answer[answer.length-1] *= 2;
            answer[answer.length-2] *= 2;
        }
        else if(dartResult[i] == '#') {
            answer[answer.length-1] *= (-1);
        }
    }
    
    return answer.reduce((acc,cur) => acc+cur);
}


