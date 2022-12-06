function solution(nums) {

    let ls = [];
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length;j++) {
            for (let k=j+1; k<nums.length; k++) {
                ls.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }
    
    let cnt = 0; 
    ls.forEach((v)=> {
        let arr = [];
        for (let i=0; i<v+1; i++) {
            if ( v % i == 0 ) arr.push(i);
        }
        
        arr.length == 2 ? cnt++ : cnt;
    })
    
    return cnt;
}