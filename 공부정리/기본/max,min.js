//Math.min , Math.max를 사용할 경우 큰 값에서 에러가 발생할 수 있음. 효율성이 떨어지기도함.
// ====> Reduce사용

let a = [6, 5, 4, 3, 2];

console.log(a.reduce((acc, cur) => acc + cur));
console.log(a.reduce((acc, cur) => acc - cur));
console.log(a.reduce((acc, cur) => acc > cur ? acc : cur));
console.log(a.reduce((acc, cur) => acc < cur ? acc : cur));
