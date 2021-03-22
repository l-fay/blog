---
title: Python | 根据函数名执行函数
date: 2021-03-22 22:28:14
tags: [Python]
categories: 
  - [Python]
---
搬运一下。

<!-- more -->

## eval()

```
for func in func_list:
    eval(func)()
```

eval() 通常用来执行一个字符串表达式，并返回表达式的值。在这里它将字符串转换成对应的函数。eval() 功能强大但是比较危险（eval is evil），不建议使用。

## locals()和globals()

```
for func in func_list:
    locals()[func]()
	globals()[func]()
```

locals() 和 globals() 是python的两个内置函数，通过它们可以以字典的方式访问局部和全局变量。

## getattr()

getattr() 是 python 的内建函数，getattr(object,name) 就相当于 object.name，但是这里 name 可以为变量。


----------

搬运自：[PHP中文网](https://www.php.cn/python-tutorials-420336.html)