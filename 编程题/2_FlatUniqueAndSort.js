let arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]]

// MDN Official example
const flatDeep = (arr, d = 1) => {
    return d > 0 ? arr.reduce((acc, val) =>  acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val) , []) : arr.slice();
}

// implement unique and sort
console.log([...new Set(flatDeep(arr1, Infinity))].sort((a, b) => a - b));