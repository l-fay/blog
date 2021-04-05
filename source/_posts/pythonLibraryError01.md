---
title: 找不到已安装包
date: 2021-04-05 16:18:06
tags: [Python, Error]
categories: 
  - [Python]
---
有的时候明明已经装了一个包，但还是报错"ModuleNotFoundError"。

<!-- more -->

猜测是包的安装路径和import的寻找路径不同，解决方法也很简单。

用`python -m pip`代替`pip`安装就好了。