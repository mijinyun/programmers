function solution(nums) {
    const newOne = [...new Set(nums)];
    console.log(newOne);
    if (nums.length/2 <= newOne.length) return nums.length/2;
    else if (nums.length/2 > newOne.length) return newOne.length;
}