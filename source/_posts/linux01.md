---
title: Ubuntu安装驱动及CUDA
date: 2020-08-20 19:20:01
tags: [Linux, Ubuntu, CUDA]
categories: 
  - [Linux, Ubuntu]
  - [CUDA]
---
因为要移植师姐的项目到新电脑的关系，需要从安装Linux系统开始从下往上配置环境。

<!-- more -->

网上有很多相关教程，但是大都很老了，可用性比较低。

后来发现可以直接在系统里更新驱动。

在确保有可用的NVIDIA显卡的情况下：

使用`ubuntu-drivers devices`命令来查看推荐驱动版本。

打开Software & Updates（软件和更新）选择Additional Drivers（附加驱动）选项卡，选择推荐驱动。

安装完毕后重启。

在命令行里使用命令`nvidia-smi`，就会看到驱动和CUDA都已经装好了。

完成。