//병합정렬과 유사 ==> but, 퀵정렬은 피봇값을 사용. 즉, 기준값을 사용!
//보통 기준값은 처음값, 마지막값, 중간값을 사용함

let 입력값 = [66,77,54,32,10,5,11,15];

function 퀵정렬(입력배열) {
    let 입력배열의길이 = 입력배열.length;

    if(입력배열의길이 <= 1 ){
        return 입력배열;
    }

    let 피벗값 = [입력배열.shift()]
    let 그룹하나 = [];
    let 그룹둘 = [];


    for (let i in 입력배열) {
        if(입력배열[i] < 피벗값) {
            그룹하나.push(입력배열[i]);
        } else {
            그룹둘.push(입력배열[i]);
        }
    }

    console.log(`그룹하나: ${그룹하나} \n 그룹둘:${그룹둘} \n 피벗값:${피벗값}`);
    return 퀵정렬(그룹하나).concat(피벗값,퀵정렬(그룹둘));
}

console.log(퀵정렬(입력값));