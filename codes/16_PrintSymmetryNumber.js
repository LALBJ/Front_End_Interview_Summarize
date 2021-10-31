let result=[]
for (let i = 1; i < 10; i++){
    // 一位数
    result.push(i)
    // 两位数
    result.push(i*11)
    for (let j = 0; j < 10; j++){
        // 三位数
        result.push(i * 101 + j * 10)
        // 四位数
        result.push(i*1001+j*110)
    }
}

console.log(result)