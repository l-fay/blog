---
title: hexo04
date: 2021-04-05 16:37:55
tags: [Hexo]
categories: 
  - [Hexo]
---

无意间在创建新的md文件的时候多按了一个空格。

<!-- more -->

然后就多了一个`layout`属性。

好奇之下，去查了一下。

这是用来设定模板的。

格式为：

```
hexo n [布局名称] <文档名称>

hexo new [布局名称] <文档名称>
```

布局名称省略的话，默认为post布局。

布局文件在博客根目录下的`scaffolds`文件夹里。