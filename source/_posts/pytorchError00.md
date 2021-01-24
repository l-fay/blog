---
title: "RuntimeError: No such operator torchvision::nms"
date: 2020-09-09 19:47:19
tags: [报错, Python, PyTorch, TorchVision]
categories: 
  - [Python, PyTorch, 报错]
---
今天遇到了如题目所示的问题

项目地址：[naver/dope](https://github.com/naver/dope)

由于是个新的项目，还没有issues，只能自力更生。

<!-- more -->

查了很多博客和其他项目的issues。

基本上都说的是torch和torchvision的版本不匹配造成的。

看到的是如下的截图：

<img src="/images/pytorchError00/img1.png">

但是没有解决问题，毕竟本地的版本是匹配的。

后来在这个[issue](https://github.com/pytorch/vision/issues/1622)里得到了灵感。

既然pythorch作者会修改源码来修复一些已知的问题，那么会不会错误的原因是pytorch版本问题呢？

于是开始求证。

在项目中，作者说用的是pytorch的1.5版本和torchvision的0.6版本。

所以在安装环境的时候，torch==1.5默认安装1.5.0版本。

再回到[torchvision](https://github.com/pytorch/vision)的网站，给出的版本对应信息如下：

<img src="/images/pytorchError00/img2.png">

果然1.5版本有个1.5.1，把torch和vision都换成相应版本，问题解决。

再列两个虽然没解决问题，但个人认为很有帮助的issues：

[issue1](https://github.com/pytorch/vision/issues/1405)

[issue2](https://github.com/pytorch/vision/issues/1489)
