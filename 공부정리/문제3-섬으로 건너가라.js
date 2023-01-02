// 9시       25   25
// 9시 10분  15   40
// 9시 20분  15   55
// 9시 30분  15   70
// 9시 40분  15   85
// 9시 50분  15   100  => 1시간당 100명 => 100명씩 12시간 : 1200명


function HowDay(people) {
    let 대기인원 = people;
    let 걸린일수 = 대기인원 / 1200;

    let 일년일수 = 0;
    for (var i=1; i<11; i++) {
        일년일수 += 2 ** i;
    }

    let 걸린년도 = 2020 + Math.floor(걸린일수 / 일년일수);

    let 걸린월수 = 0;
    let 나머지일수 =(걸린일수) % 일년일수 ;
    for (var i=10; i> 0 ; i--) {
        걸린월수++;
        if (나머지일수 < 2**i) {
            break;
        }
        나머지일수 = 나머지일수 - 2**i;
    }

    let 걸린시간 = Math.floor((대기인원%1200)/100 + 9);


    let 출발분 = [25,40,55,70,85,100];
    let 최종계산된분=0;
    
    for (var variable in 출발분) {
        if (출발분[variable] > (대기인원%1200)%100) {
            최종계산된분 = variable * 10;
            break;
        }
    }
    let day = new Date();
    최종계산된분 = (최종계산된분 + day.getMinutes()) % 60;


    return `${걸린년도}년 ${걸린월수}월 ${Math.floor(나머지일수)}일 ${걸린시간}시 ${최종계산된분}분 출발`;
}

console.log(HowDay(14000605));
console.log(HowDay(1200202));