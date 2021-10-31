function reverseArray(arr, k) {
    k %= arr.length
    arr.reverse()
    return [...arr.slice(0, k).reverse(), ...arr.slice(k).reverse()]
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7], 3))