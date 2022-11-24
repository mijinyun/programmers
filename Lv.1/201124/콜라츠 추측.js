function solution(num) {
    let cnt = 0;
    
    if (num == 1) return 0;
    while(num > 1) {
        cnt++;
        if ( num % 2 == 0) num = num/2;
        else num = (num*3)+1;
        
        if (num == 1) return cnt;
        else if (cnt > 500) return -1;
    }
}