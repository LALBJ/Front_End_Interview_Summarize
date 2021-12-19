# CSS 题目汇总

[toc]

## 1. 移动端适配方案具体实现以及对比

```markdown
常见的移动端适配方案

- 媒体查询
- flex 布局
- rem+viewport
- vh vw
- 百分比
```

## 2. css 伪类与伪元素的区别

```markdown
1. 伪类

- 其核心就是用来选择 DOM 树之外的信息，不能够被普通选择器选择的文档之外的元素，用来添加一些选择器的特殊效果
- 比如:hover\:active\:visited\:link\:focus
- 由此看出，他的功能和 class 有些类似，但是基于文档之外的抽象，所以叫伪类

2. 伪元素

- DOM 没有定义的虚拟元素
- 核心就是用于创建不存在于文档中的元素
- 比如::before ::after 选择的是元素指定的内容
- 伪元素控制的内容和元素是没有差别的，但是它本身只是基于元素的抽象，不存在于文档中，所以成为伪元素。用于将特殊的效果添加到某些选择器。
```

## 3. 请画出 CSS 盒模型，基于盒模型的原理，说明相对定位、绝对定位、浮动样式是如何实现的？

```markdown
## CSS 盒模型

页面上任何一个元素我们都可以看成是一个盒子，盒子会占用一定的空间和位置他们之间相互制约，就形成了网页的布局。

### IE 盒模型与标准盒模型

IE 模型和标准模型的唯一区别在于内容计算方式的不同

- IE 盒模型，宽度 width = content+padding+border
- 标准盒模型，宽度 width = content

## 不同定位

1. 相对定位
   relative 对象不可重叠、不脱离文档流，参考自身静态位置通过 top,bottom,left,right 定位，并且可以通过 z-index 进行层次分级。
2. 绝对定位
   absolute 脱离文档流，通过 top,bottom,left,right 定位。选取最近一个具有定位设置的父级对象进行绝对定位，如果父级对象没有设置定位属性，absolute 元素将以 body 进行定位
3. 浮动
   脱离文档流，其他盒子在定位时，会当作脱离文档流的元素不存在而定位
```

## 4. 列举出 CSS 选择器有哪些分类，并至少写出三个

```markdown
一、CSS 选择器
最基本的选择器是：标签名选择器、类选择器、ID 选择器

常见的一些选择器

- \*
  星号会将页面上每一个元素都选到。经常被用来清空 margin 与 padding。\*还可以用来选择一个元素所有的子元素
- 类选择器
- ID 选择器
- 后代选择器 x y
- 标签选择器
- 伪类选择器
- 相邻选择器 x + y
  选择元素后的直接后继元素
- x > y
  x>y 与 x y 的区别就在于前者选择的是直接子元素
- x~y
  兄弟节点组合选择器，与 x+y 类似，但是他选择的不是紧挨着的。
- X[title]
```

## 5. CSS 实现 div 宽度自适应，宽高等比缩放

```markdown

```

## 6. ul 内部除最后一个 li 外设置右边框效果

```markdown
- last-child
- nth-last-of-type/nth-last-child
- not(:last-child)
```

## 7. flex:1 的完整写法是？分别是什么意思？

````markdown
1. flex 属性
   flex 属性是 flex-grow\flex-shrink\flex-basis 的简写，默认值是 0，1，auto

- flex-grow 定义项目的放大比例，默认为 0.即如果存在剩余空间也不放大
- flex-shrink 定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小
- flex-basis 给上面两个属性分配多余空间之前，计算项目是否有多余空间，默认值为 auto，即项目本身大小

2. flex:1 的完整写法

```css
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0%;
```

3. flex 赋值情况

-flex: none

```css
flex-grow: 0;
flex-shrink: 0;
flex-basis: auto;
```

- flex: auto

```css
flex-grow: 1;
flex-shrink: 1;
flex-basis: auto;
```

-flex:非负数字

```css
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0%;
```

-flex 取值为长度或百分比
此时这个值被视为 flex-basis 的值，flex-grow 为 1，flex-shrink 为 1

```css
.item {
  flex: 0%;
}
/* 等价于 */
.item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
}

.item2 {
  flex: 10px;
}
/* 等价于 */
.item2 {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 10px;
}
```

- flex 取两个非负数字
  这时则视为 flex-grow 和 flex-shrink 的值，flex-basis 值为 0%

```css
.item {
  flex: 2 3;
}
/* 等价于 */
.item {
  flex-grow: 2;
  flex-shrink: 3;
  flex-basis: 0%;
}
```

- flex 取值为一个非负数字和一个长度或百分比
  这时视为 flex-grow 和 flex-basis 的值,flex-shrin 值为 1
````

## 8. 屏幕正中间有个元素 A，元素 A 中有文字 A，随着屏幕宽度的增加，始终需要满足以下条件

```
/*
  A元素垂直居中于屏幕中央
  A元素距离屏幕左右边距各10px
  A元素里面的文字A的font-size:20px；水平垂直居中
  A元素的高度始终是A元素宽度的50%；(如果搞不定可以实现为A元素的高度固定为200px)

  请用html及css实现
*/
```

## 9. CSS 的单位有哪些

```markdown
CSS 单位

- CSS 有几个不同的单位用于表示长度。长度由一个数字和单位组成如 10px,2em 等
- 数字和单位之间不能出现空格。如果长度值为 0，则可以省略单位
- 对于一些 CSS 属性，长度可以是负数

由有两种类型的长度单位：相对和绝对
```
