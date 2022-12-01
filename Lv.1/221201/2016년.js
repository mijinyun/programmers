function solution(a, b) {
    const day = ['THU','FRI','SAT','SUN','MON','TUE','WED'];
                 // 0     1     2     3     4     5     6
   
    for (let i=1; i<a; i++){
        if ( i <= 7) {
            if ( i == 2 ) month += 29;
            else if ( i % 2 == 0) month += 30;
            else month += 31;
        } else {
            if (i % 2 == 0) month += 31;
            else month += 30;
        }
    }
    
    const sum = (month + b) % 7 ;
    return day[sum]
    
}


// 다른 풀이

//const month = [31,29,31,30,31,30,31,31,30,31,30,31];
// let month_sum = 0;
    // for (let i=0; i<a-1; i++) {
    //     month_sum += month[i];
    // }
    // const total_sum = (month_sum + b) % 7;
    // return day[total_sum];