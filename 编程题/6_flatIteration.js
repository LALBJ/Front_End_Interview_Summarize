let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]

const flatten = function flatten(input) {
    const stack = [...input]
    const res = [];
    while (stack.length) {
        const next = stack.pop()
        if (Array.isArray(next)) {
            stack.push(...next)
        } else {
            res.push(next)
        }
    }
    // 反转数组恢复顺序
    return res.reverse()
}

console.log(flatten(arr))