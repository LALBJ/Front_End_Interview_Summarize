# TypeScript 问题汇总

[toc]

## 1. TypeScript 介绍

```markdown
## 什么是 TypeScript

Typed JavaScript Any Scale
以上是官网对于 TS 的定义，它强调了 TS 的两个最重要的特性--类型系统、适用于任何规模。

## TS 的特性

### 类型系统

类型是 TS 最核心的特性
JS 是一门非常灵活的语言：

- 它没有类型约束，一个变量可能初始化时是字符串，过一个又被赋值为数字
- 由于隐式类型转换的存在，有的变量的类型很难在运行前就确定
- 基于原型的面向对象编程，使得原型上的属性或方法可以在运行时被修改
- 函数是 JS 中的第一等公民，可以赋值给变量，也可以当作参数或返回值

这种灵活性使得 JS 蓬勃发展无所不能，另一方面也使得它的代码质量参差不齐，维护成本高，运行时错误多。
而 TS 的类型系统，在很大程度上弥补了 JS 的缺点。

### TS 是静态类型

类型系统「类型检查的时机」来分类，可以分为动态类型和静态类型。
JS 是解释性语言没有编译阶段，执行时才会报错
TS 是静态类型编译阶段就会进行类型检查

### TS 是弱类型

类型系统按照「是否允许隐式类型转换」来分类，可以分为强类型和弱类型。

TS 因为是完全兼容 JS 的，所以它不会修改 JS 运行时的特性，它们都是弱类型的

## 适用于任何规模

TypeScript 非常适用于大型项目——这是显而易见的，类型系统可以为大型项目带来更高的可维护性，以及更少的 bug。

在中小型项目中推行 TypeScript 的最大障碍就是认为使用 TypeScript 需要写额外的代码，降低开发效率。但事实上，由于有[类型推论][]，大部分类型都不需要手动声明了。相反，TypeScript 增强了编辑器（IDE）的功能，包括代码补全、接口提示、跳转到定义、代码重构等，这在很大程度上提高了开发效率。而且 TypeScript 有近百个[编译选项][]，如果你认为类型检查过于严格，那么可以通过修改编译选项来降低类型检查的标准。
```

## 2. TS 类型推论是什么

```markdown
TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。

如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查
```

## 3. TS 接口的任意属性和只读属性

````markdown
## 任意属性

```typescript
interface Person {
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom: Person = {
  name: "Tom",
  gender: "male",
};
```

一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：

## 只读属性

```typescript
interface Person {
  readonly name: string;
  age?: number;
  [propName: string]: any;
}

let tom: Person = {
  name: "Tom",
  gender: "male",
};
```
````

## 4. 数组的类型

在 TypeScript 中，数组类型有多种定义方式，比较灵活

````markdown
1. 类型+方括号法
   `let fibonacci: number[] = [1, 1, 2, 3, 5];`
2. 数组泛型
   `let fibonacci: Array<number> = [1, 1, 2, 3, 5];`
3. 用接口表示数组

```typescript
interface NumberArray {
  [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];
```
````

```

```
