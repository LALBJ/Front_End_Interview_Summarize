// 1. 使用setTimeout的第三个参数
for (var i = 0; i< 10; i++){
	setTimeout((i) => {
		console.log(i);
    }, 1000, i)
}

// 2. let 块作用域
for (let i = 0; i< 10; i++){
	setTimeout(() => {
		console.log(i);
    }, 1000)
}

// 3. IIFE
for (var i = 0; i < 10; i++){
    ((i) => {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    })(i)
	
}