---
title: Ubuntu系统安装
date: 2020-08-20 12:03:50
tags: [Linux, Ubuntu]
categories: 
  - [Linux, Ubuntu]
---
废话不多说，直接开始。

<!-- more -->

## 启动盘

首先，需要一个系统盘。

### 系统文件

从Ubuntu官网上下载系统文件。

这里有个注意事项，一般最新版本的系统会有一些意想不到的错误出现。

我之前使用过ubuntu-20.04-desktop-amd64.iso，后期因为一些兼容性问题放弃了，最终选择了ubuntu-18.04.5-desktop-amd64.iso。

[Ubuntu官方资源网站](https://releases.ubuntu.com/)

### 软件选择

我使用的是UltraISO，目前没有遇到问题。

试用版就够用了。

### 开始制作

制作流程如下：

<img src="/images/linux0/img1.png" width="60%">

<img src="/images/linux0/img2.png" width="60%">

<img src="/images/linux0/img3.png" width="60%">

<img src="/images/linux0/img4.png" width="60%">

<img src="/images/linux0/img5.png" width="60%">

<img src="/images/linux0/img6.png" width="60%">

<img src="/images/linux0/img7.png" width="60%">

制作完成后，显示刻录成功，就OK了。

没有失败过，所以这里提供不了失败的截图及处理方法。

## 安装

进入BIOS之后从U盘启动。

我懒得照照片了，以下是都是网图。

### Ubuntu单系统

如果机器没有操作系统，跟着引导，一直下一步后，那么会看到如下画面，选清除磁盘的选项，英文版的也一样，自己大致翻译一下。

<img src="/images/linux0/img8.png" width="60%">

之后就没有什么需要注意的了，跟着引导走就行。

如果之前电脑上有操作系统，现在想把Windows覆盖掉，只要一个Ubuntu系统的话，跟着引导在下图界面也选清除磁盘就行，英文界面的自己翻译一下。

<img src="/images/linux0/img9.jpg" width="60%">

### 双系统

如果想装双系统，个人感觉比较简单的方法是，先装Windows，在新装的Windows中删除几个卷，再在这些空出来的磁盘空间上装Ubuntu。

空出一些未分区的磁盘空间之后，跟着引导在下图界面选择并存，英文界面也是一样的。

<img src="/images/linux0/img9.jpg" width="60%">

到这就差不多了。

没了。