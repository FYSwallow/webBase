var findMedianSortedArrays = function(nums1, nums2) {
    let res = [...nums1, ...nums2].sort((a, b) => a - b);
    let len = res.length;
    let centerNum = 0;
    if(len % 2 === 0) {
        centerNum = (res[len / 2 -1 ] + res[len /2]) / 2;
    }else {
        centerNum = res[Math.floor(len / 2 )]
    }
    return centerNum;
};
findMedianSortedArrays([1, 3], [2])