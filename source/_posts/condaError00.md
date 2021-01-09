---
title: failed with initial frozen solve
date: 2020-12-16 15:50:22
tags: [Anaconda, conda]
categories: 
  - [Anaconda, conda]
---

记录一下遇到的错误。

<!-- more -->

不知道这个错误是啥原因，解决方法：

```
conda config --set channel_priority flexible
```