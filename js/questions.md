# JS 面试题汇总

[toc]

## 1. JS 获取原型的方法

## 2. 在 JS 中不同进制的数字的表示方式

## 3. JS 中整数的安全范围是多少

## 4. typeof NaN 的结果是什么

## 5. isNanN 和 Number.isNaN 的区别是什么

## 6. Array 只有一个参数时的表现

## 7. 其他值到字符串的转换规则

## 8. 其他值到数字的转换规则

## 9. 其他值到布尔类型的值的转换规则

## 10. {}和[]的 valueOf 和 toString 的结果分别是什么

## 11. 什么是假值对象

## 12. ~操作符的作用

## 13. 解析字符串中的数字和将字符串强制类型转换为数字的返回结果都是数字，它们之间的区别是什么？

## 14. +运算符什么时候用于字符串的拼接

## 15. 什么情况下发生布尔值的隐式强制类型转换

## 16. ||和&&操作符的返回值

## 17. Symbol 值的强制类型转换

## 18. ==操作符的强制类型转换规则

## 19. 如何将一个字符串转换成数字，例如'12.3b'

## 20. 正则表达式？？？？？？

## 21. JS 兼容性问题

```markdown
babel 主要的三步是解析（parse）转换（transform）生成（generate）

1. babel 的解析就是一个 js 解析过程，主要是接收代码并输出 ast，这个步骤分为两个阶段，词法分析（把字符串形式的代码转换为令牌（tokens）流）和语法分析（令牌流转换为 AST 形式）
2. 第二步转换，根据插件内容进行变换，其中也是 babel 最重要的一步，这里涉及到输入源码的删改过程，不过这一步也归功于第一步解析。
3. 第三步生成，将转换过的 ast 代码转换过的代码生成对应的源码
```

## 22. 完善下面函数实现图片加载

```javascript
function createImg(url) {}
createImg(url).then((value) => {
  document.body.appendChild(value);
});
```

````markdown
- 实现方式一

```javascript
function createImg(url) {}
createImg(url).then((value) => {
  document.body.appendChild(value);
});
```
````

## 23. 判断以下代码返回结果

```javascript
typeof Boolean(1);
typeof new Boolean(1);
```


