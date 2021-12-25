# React 总结

[toc]

## 写在前面

我觉得面试过程中，面试官最看重的是一些思想层面上的东西。因为思想层面的东西，往往是经过多次动手实践打磨出来的，所以相比于直接的技术点，思想上的理解更能体现你的技术能力。所以在最总结最开始先列出一些 React 设计思想上的一些内容，以便在后面的学习中加深理解。

## React

React 是什么？做什么？
官方对于 React 的解释，就是将一个复杂的 UI 界面，拆分成可嵌套可复用的组件。

React 组件设计思想？
组件设计应该满足单一职责原则，也就是组件在理想情况下应该只做一件事情。如果他的功能被不断得扩展，他就应该被分解为更小的子组件

### mockup 组件实战

在我们使用 React 的开发过程中，往往会经历以下的思考流程，这里通过 mockup 这一组件进行讲解。

1. 把 UI 分解为一个组件层次结构
2. 在 React 中建立一个静态版本  
    在这一阶段通过数据实现 UI 的渲染而不添加任何交互。在开发过程中将静态界面实现与添加交互分离开来会更加简便。建立一个静态的版本需要工作量较大但是不需要很多思考，而添加交互时需要更多的思考工作量反而较少。  
   在这一阶段不要使用 state，因为 state 只用于交互，所以开发静态版本时不需要它
3. 发现 UI state 最小但完整的表示
   通过三条原则验证数据是否为 state:

- 它是否始终保持不变？如果是，那么它不是 state
- 它是否是通过父组件的 props 传入？如果是，则它不是 state
- 你可以从你现有组件中的 state 或者 props 计算得到这个数据吗？如果可以，那个它绝对不是 state

4. 确定 state 存放位置
   确定的步骤

- 确定所有基于这个 state 渲染的组件
- 发现最近的公共组件
- 接下来决定 state 存放位置
  - 通常情况下把 state 存放在它们的公共祖先上
  - 也可以把 state 存放在它们公共祖先的祖先节点
  - 如果找不到一个可以存放 state 的组件，创建一个新的组件只持有这个 state

5. 添加反向数据流

## React 细节

1. 即使是函数组件，组件命名的首字母也要大写
2. 如果没有圆括号，return 之后的语句会被忽略

## 1. 什么是纯函数

- Minds its own business. It does not change any objects or variables that existed before it was called.
- Same inputs, same output. Given the same inputs, a pure function should always return the same result.
