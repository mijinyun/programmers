
// a배열에서 값을 꺼내 array에 정렬

let a = [10, 11, 9, 2, 3, 6, 5, 4];
let array = [];


for (var i=0; i<8; i++) {
    array.push(Math.min.apply(null,a));

    a.splice(a.indexOf(Math.min.apply(null,a)),1) //a배열에서 제거하기.
    console.log(a);
    console.log(array);
}
