---
title: Hexo | Hexo推送时如何避免每次都要输入账号密码
date: 2020-12-19 17:28:39
tags: [Hexo]
categories: 
  - [Hexo]
---

之前不知道动到哪里的设置了，每次`hexo d`的时候都要输入完整的账号密码才能发布。

<!-- more -->

之后找了一下不用每次都输入账号密码的方法，转载到这备用。

首先创建一个名为`HOME`的系统变量，内容为`%USERPROFILE%`。

然后在自己的用户目录下新建一个文件，命名为`_netrc`（C:\Users\username\\\_netrc）

编辑为：

```
machine github.com
login username
password password
```

然后重新进命令行，就行了。

——————————————————————————
更新：

`HOME`系统变量设置为`%USERPROFILE%`，有的时候会让`git`命令出问题。

原因在于有的时候命令行不解析`%USERPROFILE%`所代表的地址，直接`echo`又可以解析，就很迷0.0

解决方法：既然它不解析，那就不让它解析，直接将`HOME`的内容换成`%USERPROFILE%`所指向的具体地址。

这让就在不影响`git`命令的前提下，依然发挥不输入帐号密码的作用。