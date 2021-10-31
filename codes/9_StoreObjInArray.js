let obj = { 1: 222, 2: 123, 5: 888 };

const rel = Array.from({ length: 12 }).map((item, index) => obj[index+1]?obj[index+1]:null)

console.log(rel)