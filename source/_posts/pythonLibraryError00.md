---
title: 'matplotlib | NotImplementedError: It is not currently possible to manually set the aspect on 3D axes'
date: 2021-01-11 10:02:37
tags: [Python, Error]
categories: 
  - [Python, 常用库, Error]
---
今天跑项目的时候报错：“NotImplementedError: It is not currently possible to manually set the aspect on 3D axes”

<!-- more -->

matplotlib在19年2月的时候加入了Raise NotImplementedError，目的是是为了告诉人们3D图中尚不能更改轴纵横比的事实。

有个不是很好的解决方法

```
conda install matplotlib=2.2.3
```

但据说它可能导致画出的图变形，先用用看吧，等遇到问题了再看那时候matplotlib有没有修复这个问题，实在不行就用其他方法重构这部分。