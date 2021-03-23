---
title: Tkinter | 循环产生控件时函数的执行逻辑
date: 2021-03-23 23:06:54
tags: [Python]
categories: 
  - [Python]
---
我用控件循环产生控件时，发现这些控件绑定的函数跟预想的不太一样。

<!-- more -->

比如我循环产生10个button，如下：

```
for i in range(10):
    button = tk.Button(window, text='按钮', font=('宋体', 14), command=lambda: print(i))
    button.grid(row=i + 1, column=2)
```

用lambda的原因是button自带的command属性不能传参，只能传递函数名，我用lambda绕开这个限制。

在预想中，这10个按钮从上到下点击之后会依次输出0~9。

但实际上，不管点击哪个按钮，都只会输出9。

想了想，应该是生成控件的时候只是绑定了函数名，点击执行时才执行了我的lambda，这时lambda去读取参数，i就是9，所以无论点击哪个按钮，都只会输出9。

解决方法是用lambda时对参数进行冻结，说到底还是我对lambda的用法不是很了解才会产生这样的问题。

代码如下：

```
for i in range(10):
    button = tk.Button(window, text='按钮', font=('宋体', 14), command=lambda x=i: print(x))
    button.grid(row=i + 1, column=2)
```