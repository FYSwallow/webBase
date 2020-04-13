var twoSum = function(nums, target) {
    for(let i = 0; i< nums.length - 1; i++) {
        for(let j = i; j < nums.length; j++){
            if(nums[i]+nums[j] === target && i!== j) {
                return [i, j];
            }
        }
    }
};


function findTarget(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let oneNum = target - nums[i];
        for (let j = i; j < nums.length; j++) {
            if(nums[j] === oneNum && j !== i){
                return [i, j]
            }
            
        }
        
    }
}
console.log(findTarget([3,2,4], 6));
console.log(twoSum([3,2,4], 6));