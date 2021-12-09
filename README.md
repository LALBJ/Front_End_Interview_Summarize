# Frontend_Coding_Questions

Summarize frequently asked programming questions in front-end interviews. / 汇总前端面试中常问的编程题。

[toc]

## 1. 分别用深度优先思想和广度优先思想实现一个拷贝函数

## 2. 扁平化数组并实现去重和排序

已知如下数组：

var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

## 3. 实现一个 new

## 4. 两个数组合并成一个数组

请把两个数组 ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 和 ['A', 'B', 'C', 'D']，合并为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']。

## 5. 改造下面代码使之输出 0-9，写出你所有能想到的解法

```JavaScript
for (var i = 0; i< 10; i++){
	setTimeout(() => {
		console.log(i);
    }, 1000)
}
```

## 6. 迭代的方法实现 flatten 函数

## 7. 实现一个 sleep 函数

## 8. 实现(5).add(5).minus(2)的功能

## 9. 将公司 1 到 12 月份的销售额存在一个对象里面

## 10. 要求实现 LazyMan 类，实现以下功能

```JavaScript
LazyMan('Tony');
// Hi I am Tony

LazyMan('Tony').sleep(10).eat('lunch');
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food
```

## 11. 给定两个数组，写一个方法计算它们的交集

给定 nums1 = [1, 2, 2, 1]，nums2 = [2, 2]，返回 [2, 2]。

## 12. 数组编程题

随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]。

## 13. 如何把一个字符串的大小写取反（大写变小写小写变大写），例如 ’AbC' 变成 'aBc'

## 14. 实现一个字符串匹配算法，从长度为 n 的字符串 S 中，查找是否存在字符串 T，T 的长度是 m，若存在返回所在位置

## 15. 旋转数组

给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

示例 1

```JavaScript
输入: [1, 2, 3, 4, 5, 6, 7] 和 k = 3
输出: [5, 6, 7, 1, 2, 3, 4]
解释:
向右旋转 1 步: [7, 1, 2, 3, 4, 5, 6]
向右旋转 2 步: [6, 7, 1, 2, 3, 4, 5]
向右旋转 3 步: [5, 6, 7, 1, 2, 3, 4]
```

## 16. 打印出 1 - 10000 之间的所有对称数

## 17. 移动 0

## 18. 请实现一个 add 函数，满足以下功能

## 19. 在输入框中如何判断输入的是一个正确的网址

```javascript
add(1); 	  // 1
add(1)(2);    // 3
add(1)(2)(3)；// 6
add(1)(2, 3); // 6
add(1, 2)(3); // 6
add(1, 2, 3); // 6
```

## 20. 实现 convert 方法，把原始 list 转换成树形结构，要求尽可能降低时间复杂度

```javascript
// 原始 list 如下
let list =[
    {id:1,name:'部门A',parentId:0},
    {id:2,name:'部门B',parentId:0},
    {id:3,name:'部门C',parentId:1},
    {id:4,name:'部门D',parentId:1},
    {id:5,name:'部门E',parentId:2},
    {id:6,name:'部门F',parentId:3},
    {id:7,name:'部门G',parentId:2},
    {id:8,name:'部门H',parentId:4}
];
const result = convert(list, ...);

// 转换后的结果如下
let result = [
    {
      id: 1,
      name: '部门A',
      parentId: 0,
      children: [
        {
          id: 3,
          name: '部门C',
          parentId: 1,
          children: [
            {
              id: 6,
              name: '部门F',
              parentId: 3
            }, {
              id: 16,
              name: '部门L',
              parentId: 3
            }
          ]
        },
        {
          id: 4,
          name: '部门D',
          parentId: 1,
          children: [
            {
              id: 8,
              name: '部门H',
              parentId: 4
            }
          ]
        }
      ]
    },
  ···
];

```

## 21. 实现模糊搜索结果的关键词高亮显示

## 22. 实现一个深拷贝，并考虑对象相互引用以及 Symbol 拷贝的情况

## Reference

[1] https://github.com/Advanced-Frontend/Daily-Interview-Question
