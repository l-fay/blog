---
title: git | 将非空目录上传至GitHub仓库
date: 2020-12-19 17:40:39
tags: [Git]
categories: 
  - [Git]
---

因为是初学，学的时候自己操作的是空目录，现在想把已有的项目push上去，在备份完之后试了一下，发现正常操作就可以，记录一下。

<!-- more -->

```
cd folder
git init
git remote add origin git@github.com:l-fay/personalTools.git
git add .
git commit -m "个人用的一些工具"
git push -u origin master
```