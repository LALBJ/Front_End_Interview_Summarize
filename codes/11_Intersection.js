let nums1 = [1, 2, 2, 1]
let nums2 = [2, 2]

// 数据量较少直接使用Object而不使用Map
let map = {}
let ans = []
for (let num of nums1) {
    map[num] = map[num] ? map[num]+1:1
}
for (let num of nums2) {
    if (map[num] > 0) {
        ans.push(num)
        map[num]--
    }
}

console.log(ans)
