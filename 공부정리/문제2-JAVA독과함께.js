// let rock = [1,2,1,4];
let rock = [5, 3, 4, 1, 3, 8, 3];
let dogs = [{
    "이름" : "루비독",
    "나이" : "95년생",
    "점프력" : "3",
    "몸무게" : "4",
    },{
    "이름" : "피치독",
    "나이" : "95년생",
    "점프력" : "3",
    "몸무게" : "3",
    },{
    "이름" : "씨-독",
    "나이" : "72년생",
    "점프력" : "2",
    "몸무게" : "1",
    },{
    "이름" : "코볼독",
    "나이" : "59년생",
    "점프력" : "1",
    "몸무게" : "1",
    },
];

function goRock(rock,dogs) {
    let answer = [];

    for (let dog of dogs){
        let location = 0;
        let fail = false;

        while (location < rock.length){
            location += parseInt(dog['점프력']);
            rock[location-1] -= parseInt(dog['몸무게']);

            if (rock[location-1] < 0 ) {
                fail = true;
                break;
            }
        }

        if (!fail) {
            answer.push(dog['이름']);
        }
    }

    return answer;
}

console.log(goRock(rock,dogs));