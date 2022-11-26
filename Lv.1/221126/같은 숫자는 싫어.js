function solution(arr)
{
    let ls =[];
    arr.forEach((v) => {
        
        if (ls[ls.length-1] != v) {
            ls.push(v);
        }
    })
    return ls;
}