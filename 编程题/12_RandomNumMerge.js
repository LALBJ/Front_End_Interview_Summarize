function getRandomInitArray(min, max) {
    return Array.from({length: 12}).map(item => Math.floor(min + Math.random() * (max - min)) )
}

function mergeNum(array) {
    const cur = Array.from({ length: 10 }).map(item => []);
    for (let num of array) {
        let index = Math.floor(num / 10);
        cur[index].push(num)
    }
    return cur.filter(item => item.length > 0)
}

console.log(mergeNum(getRandomInitArray(0, 100)))