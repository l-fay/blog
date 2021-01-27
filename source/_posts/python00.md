---
title: Python静默执行命令行语句
date: 2021-01-27 23:15:45
tags: [Python]
categories: 
  - [Python]
---
大多数情况，用Python执行cmd命令的时候是用`os.system(command)`。

<!-- more -->

但有的时候，不想让控制台输出日志。

这时我会用`subprocess`的`run`函数。

```
from subprocess import run, DEVNULL
run(command, stdout=DEVNULL, stderr=DEVNULL, shell=True)
```

用的时候设置好`command`就行了。

`stdout`和`stderr`分别是标准输出和标准错误。

这俩参数和DEVNULL可以看我之前的这篇博客：

{% post_link command01 一些基础符号 %}

如果想保存日志，将`stdout`和`stderr`的值分别设置好：`open(file,"w")`。