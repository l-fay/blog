---
title: Bandizip | 使用命令行对文件进行压缩、解压
date: 2021-02-07 21:55:45
tags: [Bandizip]
categories: 
  - [Bandizip]
---
有一些比较零碎的压缩需求，我用的压缩软件是Bandizip，所以研究了下命令行操作。

<!-- more -->

[官方文档](https://www.bandisoft.com/bandizip/help/parameter/)

不做搬运了，记录一下心得。

我的需求是，一个文件夹内的多级子目录下的所有文件进行单独压缩。

虽然有`-r`这个递归参数，但是效果跟我的需求不一样，所以最后我是配合python食用的。

再者，经过测试，默认的压缩等级5，在单独文件压缩的使用背景下，和压缩等级9相差不大（压缩等级0就是不压缩）。