function kmp(s, T) {
    const ne = new Array(T.length).fill(0)
    // 构造next数组
    for (let i = 2, j = 0; i < T.length; i++) {
        while (j && T[i] != T[j+1]) j = ne[j];
        if (T[i] == T[j + 1]) j++;
        ne[i] = j
    }
    
    // 匹配
    for (let i = 1, j = 0; i < s.length; i++) {
        while(j && s[i] != T[j+1]) j = ne[j]
        if (s[i] == T[j + 1]) j++
        
        if (j == T.length-1) {
            j = ne[j];
            console.log(`位置${i}匹配成功`)
        }
    }
}

kmp('02312412124542', '01212')