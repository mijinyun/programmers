function solution(s) {

    let txt = "";
    if (s.length % 2 == 0) {
        return txt = [...s][(s.length/2)-1] + [...s][s.length/2];
    } else {
        return txt = [...s][Math.floor(s.length/2)];
    }
}