# HTML 相关问题汇总

[toc]

## 1. 请说明 html 布局元素的分类有那些？并描述每种布局元素的应用场景

```markdown
一、分类

1. 内联元素
   span, a, b, strong, i, em, br, input, textarea 以及本身 display:inline
   特征：
   从左向右显示；
   不能直接控制宽度、高度以及其他相关属性；
   但是可以控制内外边距的左右值；
   宽高由本身内容大小决定（文字、图片等）
   只能容纳文本或者其他行内元素，不能嵌套块级元素
2. 块状元素
   div, h1-6, hr, ol, ul, li, dl, table, p 本身属性为 display: block
   特征：
   独占一行，从上向下排布；
   可以控制宽度，高度以及其他相关的 CSS 属性
   在不设置宽度的情况下，块级元素的宽度是他父元素的宽度
   在不设置高度的情况下，高度是他内容本身的高度
3. 内联块状元素
   display: inline-block
   特征：
   不自动换行;
   能够识别 width\height 等相关 CSS 属性；
   默认排布方式是从左向右
   二、应用场景
   内联元素：用于不指定宽高，宽高由内容指定
   块级元素：用于指定宽高，标签占满一行
   内敛块级元素：用于指定宽高，不占满一行
```

## 2. html 标签 b 和 strong 的区别

```markdown
一、b 和 strong 的区别
两者虽然在网页中的显示效果一样，但是实际目的不同。
<b>意为 bold，即文本加粗，其目的仅仅是为了加粗文本
<strong>意为加强，是为了凸显文本比较重要，为了凸显重要显示中加粗处理

最重要的区别就是样式标签与语义化标签的区别。最容易理解的场景就是盲人用户使用阅读设备时<strong>标签会重读，而<b>标签不会

二、扩展：Html 语义化

2.1 什么是语义化
很多时候我们写 HTML，为了方便都会直接使用 div 和 span 标签，再通过 class 标签确定具体样式。网站各个部分（标题、侧边栏等）只能通过 class 确定
但是 class 命名规范没有统一的标准，导致很多时候无法确定网页结构。
在 H5 后出现了语义化，添加了很多页面布局结构的新标签。在 H5 书写中，根据不同内容用合适的标签进行开发，即为语义化。

2.2 优点

1. 便于开发者阅读代码，通过标签含义理解模块作用与功能
2. 结构明确、语义清晰的页面能有更好的用户体验，在样式（css）没有加载前也有较为明确的结构
3. 有利于 SEO（搜索引擎优化）
4. 方便其他设备阅读（如屏幕阅读器，盲人设备和移动设备等）

2.3 H5 新增语义元素

- <article>
- <aside>
- <details>
- <footer>
- <header>
- <main>
- <nav>
- <section>
- <summary>
  ...
```

## 3. 说一下减少 dom 数量的方法？一次性给你大量的 dom 如何优化？

````markdown
一、减少 DOM 数量的方法

1. 可以使用伪元素，阴影实现的内容尽量不使用 DOM 实现，如清除浮动、样式实现等；
2. 按需加载，减少不必要的渲染
3. 结构合理，语义化标签

二、 大量 DOM 时的优化
当对 DOM 元素进行一系列操作时，对 Dom 进行访问和修改引起的重绘和重排都比较消耗性能，所以关于操作 Dom，应该从以下几点出发：

1. 缓存 Dom 对象

```javascript
let rootElem = document.querySelector("#app");
let childList = rootElem.child; // 假设全是dom节点
for (let i = 0; i < childList.len; j++) {
  /**
   * 根据条件对应操作
   */
}
```

2. 文档片段
   利用 document.createDocumentFragment()方法创建文档碎片节点，创建的是一个虚拟的节点对象。
   DocumentFragments 是 DOM 节点。但是并不是主 DOM 树的一部分。
   因为文档片段存在于内存中，并不在 DOM 树中，所以将子元素插入到文档片段时不会引起页面回流
   通常的使用方法是创建文档片段，将元素附加到文档片段，然后将文档片段附加到 DOM 树。在 DOM 树中，文档片段将其所有的子元素所代替。

```javascript
<ul id="ul"></ul>;

var element = document.getElementById("ul"); // assuming ul exists
var fragment = document.createDocumentFragment();
var browsers = ["Firefox", "Chrome", "Opera", "Safari", "Internet Explorer"];

browsers.forEach(function (browser) {
  var li = document.createElement("li");
  li.textContent = browser;
  fragment.appendChild(li);
});

element.appendChild(fragment);
```

3. 使用 innerHTML 代替 appendChild
4. 最优的 layout 方案
   批量读，一次性写。
   使用 requestAnimationFrame(), 把任何导致重绘的操作放入 requestAnimationFrame
5. 虚拟 DOM
   虚拟 DOM 不会提高删除添加节点的性能，只是通过 Diff 算法能够尽可能得重用尽可能减少修改
````

## 4. Html5 有哪些新特性？如何处理 Html5 新标签的浏览器兼容问题？如何区分 Html 和 Html5？

```markdown
一、Html5 新特性

1. 拖拽释放（drag and drop）API
2. 语义化标签（header, nav, main, aside, section）
3. 音频、视频 API（audio, video）
4. 画布（Canvas）API
5. 地理（Geolocation）API
6. 本地离线存储 localstorage
7. sessionStorage
8. 表单控件，calendar、date、time、email、url
9. 新的技术 Web Worker\WebSocket

二、Html5 的兼容性问题

1. 使用 DOM 操作来添加这些标签
2. 封装好的 js 库--html5shiv.js

三、如何区分 Html 和 Html5

1. 文档类型声明

- Html 声明：<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
- H5 声明：<!DOCTYPE html>

2. 结构语义

- Html 没有语义化标签；H5 有
```

## 5. a 标签默认事件禁掉之后做了什么才实现了跳转

```javascript
let domArr = document.getElementsByTagName('a')
[...domArr].forEach(item=>{
    item.addEventListener('click',function () {
        location.href = this.href
    })
})
```

## 6. 网站 SEO 怎么处理

```markdown
一、SEO 介绍
搜索引擎有着一个庞大的数据库存储诸多关键词，以及关键词对应的网址；
一个关键词对应多个网址，因此就出现了排序的问题；
SEO 就是遵循搜索引擎对网页的排序规则对网页进行优化，提高网站权重
二、前端 SEO 规范

1. 合理的 title\description\keywords：搜索引擎对着三项的权重依次减小，title 强调重点；description 把页面内容高度概括，不可罗列关键词；keywords 列举出重要关键词
2. 语义化的 HTML 标签
3. 非装饰性的图片必须加上 alt
4. 让重要的 HTML 内容放在前面优先加载
5. 每个页面只出现一个 h1 标签
6. 页面尽量不要做成 flash\图片\视频\，因为搜索引擎抓取不到
7. 少用 iframe
8. 采用友情链接
   ...
```

## 7. script 中 async 和 defer 的区别

```markdown
script 中的 JS 加载渲染会阻塞 dom 渲染
相同点：

- 加载文件时不阻塞页面渲染
- 对于 inline 的 script 无效，当 script 标签中间有代码时，两个属性都不会起作用
- 使用这两个属性的脚本中不能调用 document.write 方法
- 有脚本的 onload 事件回调
  不同点：
- h4 中定义了 defer；H5 中定义了 async
- 浏览器支持不同
- 每一个 async 脚本都在它下载结束之后立即执行，同时会在 window 的 load 事件之前执行。所以可能出现脚本执行顺序被打乱的情况；每一个 defer 属性的脚本都是在页面解析完毕之后，按照原本顺序执行
```
